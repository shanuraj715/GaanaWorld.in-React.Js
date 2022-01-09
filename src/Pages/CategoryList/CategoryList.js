import React, { Component } from 'react'
import {
    Header,
    Footer,
    OtherFeatures,
    SongCard,
    CategoryCard,
    Breadcrumb,
    SongSkeleton,
    CategorySkeleton,
    Pagination,
    Tags,
    Title
} from '../../components/Index'
import { Link } from 'react-router-dom'

import './categorylist.css'
import conf from '../../conf'
import toast from 'react-hot-toast'
import func from '../../assets/js/functions'


export default class CategoryList extends Component {

    state = {
        categories: [],
        songs: [],
        perPageLimitSongs: 20,
        pageNo: 1,
        totalPages: 1,
        isLoadingCategories: true,
        isLoadingSongs: true,
        tags: [],
        categoryName: '',
        breadCrumb: []
    }

    componentDidMount() {
        this.setState({ categories: [], songs: [], isLoadingCategories: true, tags: [] }, () => {
            this.fetchCategories()
            this.fetchSongs()
        })
    }

    componentDidUpdate(prevProps) {
        let { pathname } = this.props.location;
        let { pathname: prevPathname } = prevProps.location;
        pathname = pathname.split('/')[2];
        prevPathname = prevPathname.split('/')[2];
        if ((this.props.location.pathname && pathname !== prevPathname) ||
            (this.props.location.search !== prevProps.location.search)) {
            this.setState({ categories: [], songs: [], isLoadingCategories: true, tags: [] }, () => {
                this.fetchCategories()
                this.fetchSongs()
            })
            window.scrollTo(0, 0)
        }
    }

    fetchCategories() {
        fetch(conf.API_URL + 'category?id=' + this.getCategoryId(), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Error")
            })
            .then(json => {
                if (json.status) {
                    this.setState({
                        categories: json.data,
                        isLoadingCategories: false,
                        tags: json.tags,
                        categoryName: json.category_name,
                        breadcrumb: json.breadcrumb
                    })
                }
                else {
                    toast.error(json.error.message, {
                        position: "bottom-left"
                    })
                }
                this.setState({
                    isLoadingCategories: false
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    isLoadingCategories: false
                })
            })
    }

    fetchSongs = () => {
        let offset = (conf.LIMITS.SONG_LIMIT * this.getPageNo()) - conf.LIMITS.SONG_LIMIT
        fetch(conf.API_URL + 'songs?cid=' + this.getCategoryId() + '&limit=' + conf.LIMITS.SONG_LIMIT + '&offset=' + offset, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Error")
            })
            .then(json => {
                if (json.status) {
                    this.setState({
                        songs: json.data,
                        isLoadingSongs: false,
                        totalPages: Math.ceil(json.total_results / conf.LIMITS.SONG_LIMIT)
                    })
                }
                else {
                    toast.error(json.error.message, {
                        position: "bottom-left"
                    })
                }
                this.setState({
                    isLoadingSongs: false
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    isLoadingSongs: false
                })
            })
    }

    getPageNo = () => {
        let params = func.urlParams()
        return Number(params.page || 1)
    }

    getCategoryId = () => {
        let url = window.location.href
        let arr = url.split('/')
        let categoryIndex = arr.indexOf('category')
        let categoryId = arr[categoryIndex + 1]
        return categoryId.split('?')[0]
    }



    render() {
        return (
            <React.Fragment>
                <Header />
                <Breadcrumb data={ this.state.breadcrumb }/>
                {this.state.isLoadingCategories ? <CategorySkeleton count={8} /> : null}
                {this.state.categories.length > 0 && this.state.pageNo === 1 ?
                    <div className="c-cat-cont">
                        <Title iconClass="fa-guitar-electric" title={'Categories of ' + this.state.categoryName} />
                        <div className="categories-container">
                            {this.state.categories?.map((item, index) => (
                                <CategoryCard key={index} category_id={item.category_id} category_name={item.category_name} />
                            ))}
                        </div>
                    </div> : null}
                {this.state.songs.length > 0 ?
                    <React.Fragment>
                        <div className="c-song-cont">
                            <Title iconClass="fa-music" title="All Songs" />
                            <div className="songs-container">
                                {this.state.isLoadingSongs ? <SongSkeleton count={20} /> : this.state.songs?.map((item, index) => {
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
                        </div>
                        {/* <Pagination /> */}
                        {this.state.totalPages > 1 ?
                            <div className="pagination-cont">

                                <div className="pagination-btn-cont">
                                    <Link to={`${'/category/' + this.getCategoryId()}`}>1</Link>
                                    <Link to={`${'/category/' + this.getCategoryId() + '?page=' + (this.getPageNo() === 1 ? 1 : this.getPageNo() - 1)}`}>Prev</Link>
                                    <span>{this.getPageNo()}</span>
                                    <Link to={`${'/category/' + this.getCategoryId() + (this.getPageNo() === this.state.totalPages ? '' : '?page=' + this.getPageNo() + 1)}`}>Next</Link>
                                    <Link to={`${'/category/' + this.getCategoryId() + '?page=' + this.state.totalPages}`}>{this.state.totalPages}</Link>
                                </div>
                            </div> : null}
                    </React.Fragment> : null}
                <Tags data={this.state.tags} />
                <OtherFeatures />
                <Footer />
            </React.Fragment>
        )
    }
}
