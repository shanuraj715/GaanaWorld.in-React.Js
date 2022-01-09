import React, { Component } from 'react'
import { Header, Footer, Breadcrumb, Pagination, Tags, OtherFeatures, SongCard } from '../../components/Index'


export default class ShowAlbum extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
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
