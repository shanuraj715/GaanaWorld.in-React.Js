import React, { Component } from 'react'
import LatestUploads from './comps/LatestUploads/LatestUploads'
import './home.css'
import { Header, Footer, Title, CategoryCard, OtherFeatures, FooterPlayer, Player } from '../../components/Index'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <LatestUploads />
                <div className="home-categories">
                    <Title iconClass="fa-guitar-electric" title="Music Categories" />
                    <div className="categories-container">
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
                </div>
                <OtherFeatures />
                <Footer />
            </React.Fragment>
        )
    }
}
