import React, { Component } from 'react'
import {
    Header,
    Footer,
    Icon,
    Breadcrumb,
    OtherFeatures,
    Title,
    SongCard
} from '../../components/Index'
import { Link } from 'react-router-dom'
import SongDetail from './components/SongDetail/SongDetail'
import './song.css'
import SongShare from './components/SongShare/SongShare'

export default class Song extends Component {
    render() {
        return (
            <>
                <Header />
                <Breadcrumb />
                <SongDetail />
                <div className="sd-btns-cont">
                    <button className="custom-btn btn-15">
                        <Icon classes="fa-play pd-r-10" type="solid" />
                        Play Now
                    </button>
                    <button className="custom-btn btn-15">
                        <Icon classes="fa-download pd-r-10" type="solid" />
                        Download
                    </button>
                    <button className="custom-btn btn-15">
                        <Icon classes="fa-share-alt pd-r-10" type="solid" />
                        Share
                    </button>
                </div>
                <div className="">
                    <Title iconClass="fa-list-music" title="Related Files" />
                    <div className="related-files-cont">
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
                    </div>
                </div>
                <OtherFeatures />
                <Footer />
                
                <SongShare />
            </>
        )
    }
}
