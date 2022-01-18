import React, { Component } from 'react'
import { Header, Footer, Breadcrumb, Tags, Pagination, OtherFeatures, SongCard } from '../../components/Index'

export default class Singer extends Component {
    render() {
        return (
            <React.Fragment>
                <Header {...this.props} />
                <Breadcrumb />
                <div className="songs-container">
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                </div>
                <Pagination />
                <Tags />
                <OtherFeatures />
                <Footer />
            </React.Fragment>
        )
    }
}
