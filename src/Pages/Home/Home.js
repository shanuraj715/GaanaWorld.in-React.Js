import React, { Component } from 'react'
import LatestUploads from './comps/LatestUploads/LatestUploads'
import './home.css'
import { Header, Footer, Title, CategoryCard, OtherFeatures, CategorySkeleton } from '../../components/Index'
import conf from '../../conf'
import toast from 'react-hot-toast'

export default class Home extends Component {

    componentWillMount() {
        window.scrollTo(0, 0)
        this.fetchCategories()
    }

    state = {
        category_list: [],
        isCategoryLoading: true
    }

    fetchCategories = () => {
        fetch(conf.API_URL + 'home_categories', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            if (res.ok) return res.json()
            throw new Error("Error")
        }).then(json => {
            console.log(json)
            if (json.status) {
                this.setState({ category_list: json.data })
            }
            else {
                toast.error(json.error.message, { position: 'bottom-left' })
            }
            this.setState({ isCategoryLoading: false })
        }).catch(err => {
            this.setState({ isCategoryLoading: false })
            console.log(err)
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <LatestUploads />
                <div className="home-categories">
                    <Title iconClass="fa-guitar-electric" title="Music Categories" />
                    <div className="categories-container">
                        { this.state.isCategoryLoading ? <CategorySkeleton count={ 8 } /> : null }
                        {this.state.category_list?.map((item, index) => (
                            <CategoryCard key={index} category_id={item.category_id} category_name={item.category_name} />
                        ))}
                    </div>
                </div>
                <OtherFeatures />
                <Footer />
            </React.Fragment>
        )
    }
}
