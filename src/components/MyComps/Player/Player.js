import React, { Component } from 'react'
import './player.css'
import { Icon } from '../../Index'
import conf from '../../../conf'
import Queue from './comps/Queue/Queue'

export default class Player extends Component {

    componentDidMount() {
        document.body.style.maxHeight = '100vh';
        document.body.style.minHeight = '100vh';
        document.body.style.minWidth = '100vw';
        document.body.style.maxWidth = '100vw';
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.maxHeight = 'initial';
        document.body.style.minHeight = 'initial';
        document.body.style.minWidth = 'initial';
        document.body.style.maxWidth = 'initial';
        document.body.style.overflow = 'initial';
    }


    render() {
        console.log( this.props )
        return (
            <div className="full-player theme-light">
                <Queue />

                <div className="fp1-page-cont">
                    <div className="fp1-player-cont-top">
                        <div className="fp1-player-cont">
                            <p className="fp1-app-name">{conf.APP_NAME}</p>
                            <div className="fp1-song-img-cont">
                                <img src="/favicon.png" alt="" className="fp1-song-img" />
                            </div>
                            <p className="fp1-song-title">Song Name Here</p>
                            <div className="">
                                <input type="range" id="scrubber" className="fp1-duration-slider" min="0" max={ this.props.maxScrubberVal}  onChange={e => this.props.seek(e.target.value)} />
                            </div>
                            <div className="fp1-btn-cont">

                            </div>
                        </div>
                    </div>
                    <div className="fp1-player-fav-cont">

                    </div>
                </div>
            </div>
        )
    }
}
