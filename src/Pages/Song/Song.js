import React, { Component } from 'react'
import {
    Header,
    Footer,
    Icon,
    Breadcrumb,
    OtherFeatures,
    Title,
    SongCard,
    Tags
} from '../../components/Index'
import SongDetail from './components/SongDetail/SongDetail'
import './song.css'
import SongShare from './components/SongShare/SongShare'
import conf from '../../conf'
import ReactTooltip from 'react-tooltip';
import toast from 'react-hot-toast'
import GraphComment from './components/GraphComment/GraphComment'

export default class Song extends Component {

    state = {
        shareModal: 'hidden',
        song_data: {},
        tags: [],
        related_files: [],
        breadcrumb: [],
        songId: null
    }

    constructor(props) {
        super();
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        this.setState({
            songId: this.getSongId()
        })
        this.fetchData()
    }

    autoplayHandler = () => {

    }

    componentDidUpdate(prevProps, prevState) {

        let { pathname } = this.props.location;
        let { pathname: prevPathname } = prevProps.location;
        pathname = pathname.split('/')[2];
        prevPathname = prevPathname.split('/')[2];
        if (this.props.location.pathname && pathname !== prevPathname) {
            this.setState({
                songId: this.getSongId()
            })
            this.fetchData()
            window.scrollTo(0, 0)
        }
    }

    getSongId = () => {
        let url = window.location.href
        let url_array = url.split('/')
        let songIndex = url_array.indexOf('song')
        let song_id = url_array[songIndex + 1]
        return parseInt(song_id)
    }

    fetchData() {
        fetch(conf.API_URL + 'song?id=' + this.getSongId(), {
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
                console.log(json)
                this.setState({
                    song_data: {
                        thumb: json.data.thumb,
                        songId: json.data.song_id,
                        title: json.data.title,
                        cat_id: json.data.category_id,
                        cat_name: json.data.category_name,
                        singer_id: json.data.singer_id,
                        singer_name: json.data.singer_name,
                        album_id: json.data.album_id,
                        album_name: json.data.album_name,
                        added_on: json.data.added_date,
                        added_at: json.data.added_time,
                        size: json.data.size,
                        length: json.data.length,
                        total_downloads: json.data.total_downloads,
                        short_url: json.data.short_url,
                        url_title: json.data.url_title,
                        file_path: json.data.file,
                        file_key: json.data.file_key,
                    },
                    breadcrumb: json.data.breadcrumb,
                    tags: json.data.tags,
                    related_files: json.data.related_files
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    toggleSongShareModal = () => {
        let m = document.getElementById('song-share-mod')
        let modal = document.getElementById("song-share-modal")
        if (m.style.display === 'none') {
            modal.classList.add('modal-open')
            modal.classList.remove('modal-close')
            document.body.style.maxHeight = '100vh';
            document.body.style.overflow = 'hidden';
            m.style.display = "grid";
        }
        else {
            modal.classList.add('modal-remove')
            modal.classList.remove('modal-open')
            setTimeout(() => {
                m.style.display = 'none'
                modal.classList.remove('modal-remove')
                document.body.style.maxHeight = 'initial';
                document.body.style.overflow = 'initial';
            }, 200)
        }
    }

    audioPlayHandler = () => {
        if (this.state.song_data.songId)
            this.props.updateSid(parseInt(this.state.song_data.songId))
        else
            toast.error("Loading Data. Please wait...", { position: 'bottom-left' })

    }

    render() {
        return (
            <>
                <Header {...this.props} />
                <Breadcrumb data={this.state.breadcrumb} />
                <SongDetail data={this.state.song_data} />
                <div className="sd-btns-cont">
                    <button className="custom-btn btn-15" onClick={this.audioPlayHandler}>
                        <Icon classes="fa-play pd-r-10" type="solid" />
                        Play Now
                    </button>
                    <button className="custom-btn btn-15" onClick={this.download}>
                        <Icon classes="fa-download pd-r-10" type="solid" />
                        Download
                    </button>
                    <button className="custom-btn btn-15" onClick={this.toggleSongShareModal}>
                        <Icon classes="fa-share-alt pd-r-10" type="solid" />
                        Share
                    </button>
                </div>
                {this.state.tags.length !== 0 ? <Tags data={this.state.tags} /> : null}
                <div className="">
                    <Title iconClass="fa-list-music" title="Related Files" />
                    <div className="related-files-cont">
                        {this.state.related_files?.map((item, index) => <SongCard
                            key={index}
                            url={'/song/' + item.song_id + '/' + item.url}
                            title={item.title}
                            field1={item.category_name}
                            field2={item.singer_name}
                            field3={item.size}
                        />
                        )}
                    </div>
                </div>
                <Title iconClass="fa-comment" title="Comments" />
                <GraphComment key={this.state.songId} />
                <OtherFeatures />
                <Footer />
                <ReactTooltip type="info" effect="float" />
                <SongShare toggle={this.toggleSongShareModal} url="" short_url={conf.APP_URL + 's/' + this.state.song_data.short_url} />
            </>
        )
    }

    download = () => {
        let song_id = parseInt(this.state.song_data.songId)
        let key = this.state.song_data.file_key
        window.open(conf.DOWNLOAD_SERVER_URL + '?file_id=' + song_id + '&auth_key=' + key, '_blank')
    }
}
