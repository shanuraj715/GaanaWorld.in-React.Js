import React, { Component } from 'react'
import { Header, Footer, Pagination, OtherFeatures, Title, SongCard, SongSkeleton } from '../../components/Index'
import ci from '../../assets/images/no-result.svg'
import { Link } from 'react-router-dom'
import './search.css'
import conf from '../../conf'
import toast from 'react-hot-toast'
import func from '../../assets/js/functions'

export default class Search extends Component {

  state = {
    searchStr: "",
    data: [],
    pageNo: 1,
    perPageLimitResults: 20,
    totalResults: 0,
    isLoading: true,
    totalPages: 1
  }

  componentDidMount() {
    this.getSearchString()
    this.setState({
      isLoading: true,
      data: [],
      pageNo: this.getPageNo()
    }, () => {
      this.fetchData()
    })
  }

  componentDidUpdate(prevProps) {
    let { pathname } = this.props.location;
    let { pathname: prevPathname } = prevProps.location;
    let searchString = pathname.split('/')[2];
    let prevSearchStr = prevPathname.split('/')[2];

    let pageNo = pathname.split('/')[3];
    let prevPageNo = prevPathname.split('/')[3];

    if (this.props.location.pathname && (searchString !== prevSearchStr) || (pageNo !== prevPageNo)) {

      window.scrollTo(0, 0)
      this.getSearchString()
      this.setState({
        isLoading: true,
        data: [],
        pageNo: this.getPageNo()
      }, () => {
        this.fetchData()
      })
    }
  }

  getSearchString = () => {
    let url = window.location.href
    let arr = url.split('/')
    let indexOfSearch = arr.indexOf('search')
    let string = (arr[indexOfSearch + 1] || '').split("?")[0]
    this.setState({
      searchStr: string
    })
    return string
  }

  getPageNo = () => {
    let url = window.location.href
    let arr = url.split('/')
    let indexOfSearch = arr.indexOf('search')
    let pageno = !isNaN(arr[indexOfSearch + 2]) ? parseInt(arr[indexOfSearch + 2]) : 1
    return pageno
  }

  fetchData = () => {
    let offset = (this.getPageNo() * this.state.perPageLimitResults) - this.state.perPageLimitResults
    fetch(conf.API_URL + 'search?str=' + this.getSearchString() + '&offset=' + offset + '&limit=' + this.state.perPageLimitResults, {
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
            data: json.data,
            isLoading: false,
            totalResults: json.total_results,
            totalPages: Math.ceil((json.total_results || 1) / this.state.perPageLimitResults)
          })
        }
        else {
          toast.error(json.error.message, {
            position: 'bottom-center'
          })
          this.setState({
            isLoading: false
          })
        }
      })
      .catch(err => {
        this.setState({
          isLoading: false
        })
      })
  }


  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        {!this.state.isLoading && this.state.data.length === 0 ?
          <>
            <div className="no-result-container">
              <div className="no-result-image-c">
                <img src={ci} alt="" />
              </div>
              <div className="no-res-data">
                <p className="no-res-title">No Result Found</p>
                <p className="no-res-desc">Sorry!!!<br />We do not have any data for your query.</p>
                <Link to="/" className="no-res-link">HomePage</Link>
              </div>
            </div>
          </> : null}
        {this.state.isLoading ? <SongSkeleton count={this.state.perPageLimitResults} /> : null}
        {this.state.data.length > 0 ? <>
          <Title iconClass="fa-search" title={"Search result for " + func.pascalCase(this.state.searchStr)} />
          <div className="songs-container">
            {this.state.data.map((item, index) => {
              return <SongCard key={index}
                url={'/song/' + item.song_id + '/' + item.url}
                title={item.title}
                field1={item.category_name}
                field2={item.singer_name}
                field3={item.size}
              />
            })}
          </div>
          {/* <Pagination /> */}
          { this.state.totalResults > this.state.perPageLimitResults ? 
          <div className="pagination-cont">

            <div className="pagination-btn-cont">
              <Link to={`${'/search/' + this.state.searchStr}`}>1</Link>
              <Link to={`${'/search/' + this.state.searchStr + '/' + (this.getPageNo() <= 1 ? 1 : this.getPageNo() - 1)}`}>Prev</Link>
              <span>{this.state.pageNo}</span>
              <Link to={`${'/search/' + this.state.searchStr + '/'  + (this.getPageNo() === this.state.totalPages ? this.state.totalPages : this.getPageNo() + 1)}`}>Next</Link>
              <Link to={`${'/search/' + this.state.searchStr + '/' + this.state.totalPages}`}>
                {this.state.totalPages}
              </Link>
            </div>
          </div> : null }
        </> : null}
        <OtherFeatures />
        <Footer />
      </React.Fragment>
    )
  }
}
