import React, { Component } from 'react'
import { Header, Footer, Breadcrumb, Pagination, OtherFeatures, CategoryCard } from '../../components/Index'


export default class SingerList extends Component {
    render() {
        return (
            <React.Fragment>
                <Header {...this.props} />
                <Breadcrumb />
                <div className="catgory-container">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
                <Pagination />
                <OtherFeatures />
                <Footer />
            </React.Fragment>
        )
    }
}
