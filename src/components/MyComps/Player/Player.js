import React, { Component } from 'react'
import './player.css'
import { Icon } from '../../Index'
import conf from '../../../conf'
import playerFunc from '../../../assets/js/player'
import Queue from './comps/Queue/Queue'

export default class Player extends Component {

    componentDidMount() {
        document.body.style.maxHeight = '100vh';
        document.body.style.minHeight = '100vh';
        document.body.style.minWidth = '100vw';
        document.body.style.maxWidth = '100vw';
        document.body.style.overflow = 'hidden';

        this.interval = setInterval(() => {
            this.scrubberOnChangeHandler()
        }, 250)
    }

    componentWillUnmount() {
        document.body.style.maxHeight = 'initial';
        document.body.style.minHeight = 'initial';
        document.body.style.minWidth = 'initial';
        document.body.style.maxWidth = 'initial';
        document.body.style.overflow = 'initial';

        clearInterval(this.interval)
    }

    scrubberOnChangeHandler = () => {
        const e = document.getElementById("scrubber")
        const max = e.max
        const value = e.value

        e.style.backgroundSize = (value / max) * 100 + "%"


    }

    render() {
        return (
            <div className="full-player theme-light">
                <Queue />
                <div className="player-background" style={{ backgroundImage: `url(${this.props.playingSongData.thumb})` }}></div>
                <div className="player-page-container">
                    <div className="player-top-site-name">
                        <h2 className=""><span>{conf.APP_NAME}</span></h2>
                    </div>
                    <div className="player-card">
                        <div className="player-card-left">
                            <div className="player-thumb-cont">
                                <img src={this.props.playingSongData.thumb} className="player-thumb" alt="" />
                            </div>
                        </div>
                        <div className="player-card-right">
                            <div className="player-data-row">
                                <h2 className="pd-title">{this.props.playingSongData.title}</h2>
                                <span className="pd-category">{this.props.playingSongData.category_name}</span>
                            </div>
                            <div className="player-dta-row">
                                <p className="pd-singer-cont">
                                    <span className="pd-singer">{this.props.playingSongData.singer_name}</span>
                                </p>
                                <input type="range" id="scrubber" className="pd-scrubber" min="0" max={this.props.maxScrubberVal} onChange={e => this.props.seek(e.target.value)} />
                                <div className="pd-time-cont">
                                    <span className="pd-curr-time">{playerFunc.secToMinSec(this.props.currentTime).min}:{playerFunc.secToMinSec(this.props.currentTime).sec}</span>
                                    <span className="pd-duration">{playerFunc.secToMinSec(this.props.maxScrubberVal).min}:{playerFunc.secToMinSec(this.props.maxScrubberVal).sec}</span>
                                </div>
                            </div>
                            <div className="player-data-row player-control-btn-cont">
                                <button className="pd-control-btn pd-prev-btn" onClick={() => { }}><Icon classes="fa-angle-double-left" type="solid" /></button>
                                <button className="pd-control-btn pd-play-pause-btn" onClick={this.props.toggle}><Icon classes={`${this.props.playing ? 'fa-pause' : 'fa-play'}`} type="regular" /></button>
                                <button className="pd-control-btn pd-next-btn" onClick={() => { }}><Icon classes="fa-angle-double-right" type="solid" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <p>
                            Cards Here
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
