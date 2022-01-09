import React, { Component } from 'react'
import { Title } from '../../../../components/Index'
import { Icon, SongCard, SongSkeleton } from '../../../../components/Index'
import { Link } from 'react-router-dom'
import './latestuploads.css'
import conf from '../../../../conf'
import toast from 'react-hot-toast';

export default class LatestUploads extends Component {

    state = {
        latestUploads: [],
        loadingLatestUploads: true
    }

    componentDidMount() {
        this.setState({loadingLatestUploads: true}, () => {
            this.fetchLatestUploads()
        })
    }

    fetchLatestUploads = () => {
        fetch(conf.API_URL + 'latest?limit=' + conf.LIMITS.LATEST_UPLOADS + '&order=song_id&by=desc', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Error")
            })
            .then(json => {
                if( json.status ) this.setState({ latestUploads: json.data, loadingLatestUploads: false })
                else toast.error(json.error.message, { position: 'bottom-left'})
            })
            .catch(err => {
                console.log( err )
                
            })
    }
    render() {
        return (
            <div className="h-latest-uploads">
                <Title iconClass="fa-guitar-electric" title="Latest Uploads" />
                <div className="h-lu-list">
                    { this.state.loadingLatestUploads ? <SongSkeleton /> : this.state.latestUploads?.map((item, index) => {
                        return <SongCard
                            url={ '/song/' + item.song_id + '/' + item.url }
                            title={ item.title }
                            field1={ item.category_name}
                            field2={ item.singer_name }
                            field3={ item.size }
                            key={index} />
                    })}
                </div>
                <p className="latest-upload-more-btn"><Link to="/latest-uploads">Browse Latest Uploads <Icon type="solid" classes="fa-angle-double-right" /></Link></p>
            </div>
        )
    }
}
