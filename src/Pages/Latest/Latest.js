import React, { Component } from 'react'
import {
    Header,
    Footer,
    Title,
    SongCard,
    OtherFeatures,
    Icon,
    Pagination,
    SongSkeleton
} from '../../components/Index'
import './latest.css'
import conf from '../../conf'
import { Link } from 'react-router-dom'

export default class Latest extends Component {

    state = {
        list: [],
        pageno: 1,
        totalPages: 0,
        isLoading: true
    }

    constructor(props) {
        super();
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        }, () => {
            this.fetchLatestUploads()
        })
    }

    componentDidUpdate(prevProps, prevState) {

        let { pathname } = this.props.location;
        let { pathname: prevPathname } = prevProps.location;
        pathname = pathname.split('/')[2];
        prevPathname = prevPathname.split('/')[2];
        if (this.props.location.pathname && pathname !== prevPathname) {

            window.scrollTo(0, 0)
            this.setState({
                isLoading: true
            }, () => {
                this.fetchLatestUploads()
            })
        }
    }

    fetchLatestUploads() {
        let offset = (this.getPageNo() * conf.LIMITS.SONG_LIMIT) - conf.LIMITS.SONG_LIMIT
        fetch(conf.API_URL + '/latest?order=song_id&by=desc&limit=' + conf.LIMITS.SONG_LIMIT + '&offset=' + offset, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Error")
            })
            .then(json => {
                this.setState({
                    list: json.data,
                    isLoading: false
                })
                this.updateTotalPages(json.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    updateTotalPages = (results) => {
        this.setState({ totalPages: Math.ceil(results / conf.LIMITS.SONG_LIMIT) })
    }

    getPageNo() {
        let url = window.location.href
        let url_array = url.split('/')
        let indexOfLatestUploads = url_array.indexOf('latest-uploads')
        return url_array[indexOfLatestUploads + 1] ? parseInt(url_array[indexOfLatestUploads + 1]) : 1
    }

    render() {
        return (
            <>
                <Header {...this.props} />
                <Title iconClass="fa-music" title="Latest Uploads" />
                <div className="latest-uploads">
                    {this.state.isLoading ? <SongSkeleton count={20} /> : this.state.list?.map((item, index) => {
                        return <SongCard
                            key={index}
                            title={item.title}
                            url={'/song/' + item.song_id + '/' + item.url}
                            field1={item.category_name}
                            field2={item.singer_name}
                            field3={item.size}
                        />
                    })}
                </div>
                <div className="pagination-cont">

                    <div className="pagination-btn-cont">
                        <Link to="/latest-uploads/1">1</Link>
                        <Link to={`${'/latest-uploads/' + (this.getPageNo() <= 1 ? 1 : this.getPageNo() - 1)}`}>Prev</Link>
                        <span>{this.getPageNo()}</span>
                        <Link to={`${'/latest-uploads/' + (this.getPageNo() === this.state.totalPages ? this.state.totalPages : this.getPageNo() + 1)}`}>Next</Link>
                        <Link to={`${'/latest-uploads/' + (this.state.totalPages || 1)}`}>{this.state.totalPages}</Link>
                    </div>
                </div>
                <OtherFeatures />
                <Footer />
            </>
        )
    }
}
