import React, { Component } from 'react'
import { Title } from '../../../../components/Index'
import { Icon, SongCard } from '../../../../components/Index'
import { Link } from 'react-router-dom'
import './latestuploads.css'

export default class LatestUploads extends Component {
    render() {
        return (
            <div className="h-latest-uploads">
                <Title iconClass="fa-guitar-electric" title="Latest Uploads" />
                <div className="h-lu-list">
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
                <p className="latest-upload-more-btn"><Link to="/latest-uploads">Browse Latest Uploads <Icon type="solid" classes="fa-angle-double-right" /></Link></p>
            </div>
        )
    }
}
