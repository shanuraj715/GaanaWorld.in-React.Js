import React, { Component } from 'react'
import {
    Header,
    Footer,
    Title,
    SongCard,
    OtherFeatures,
    Pagination,
    FooterPlayer,
    Player
} from '../../components/Index'
import './latest.css'


export default class Latest extends Component {
    render() {
        return (
            <>
                <Header />
                <Title iconClass="fa-music" title="Latest Uploads" />
                <div className="latest-uploads">
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
                <OtherFeatures />
                <Footer />
            </>
        )
    }
}
