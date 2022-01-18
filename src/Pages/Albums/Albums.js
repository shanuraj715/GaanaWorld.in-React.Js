import React, { Component } from 'react'
import { Header, Footer, Breadcrumb, OtherFeatures, Pagination, CategoryCard } from '../../components/Index'

export default class Albums extends Component {
    render() {
        return (
            <React.Fragment>
                <Header {...this.props} />
                <Breadcrumb />
                <div className="category-container">
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
