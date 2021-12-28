import React, { Component } from 'react'
import './footerplayer.css'
import './song-bars.css'

import ReactTooltip from 'react-tooltip';
import { Icon } from '../../../components/Index'

import func from '../../../assets/js/player'

export default class FooterPlayer extends Component {

    state = {
        scrubberTooltipVal: 0,
        maxScrubberVal: 300,
        volume: 100
    }

    componentDidMount() {
        let scrubber = document.getElementById("scrubber")
        scrubber.addEventListener('mousemove', this.scrubber)
    }

    scrubber = e => {
        let width = window.innerWidth
        let x = e.clientX
        let min = 0
        let max = this.state.maxScrubberVal
        let value = (x / width) * (max - min)
        this.setState({ scrubberTooltipVal: value })
    }

    scrubberMinSecStr = sec => {
        let result = func.secToMinSec(sec)
        return result.min + ":" + result.sec
    }

    volumeChange = e => {
        let value = e.target.value
        console.log(e.target.value)
        let val = ((value - 0) / 100) * 100
        let css = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + val + '%, #bdc3c7 ' + val + '%, #bdc3c7 100%)'
        document.getElementById("volume-controller").style.background = css
        this.setState({ volume: value })
    }


    render() {
        return (
            <React.Fragment>
                <div className="footer-player-ph"></div>

                <div className="music-player">
                    <div className="mp-seek">
                        <input data-for="scrubber-inp" data-tip type="range" min="0" max={this.state.maxScrubberVal} id="scrubber" />
                        <ReactTooltip id='scrubber-inp' type='dark' effect='float'>
                            <span>{this.scrubberMinSecStr(Math.ceil(this.state.scrubberTooltipVal))}</span>
                        </ReactTooltip>
                    </div>
                    <div className="mp-left">
                        <div className="mp3-icon-cont">
                            {/* <Icon type="solid" classes="fas fa-music mp-footer-icon" /> */}
                            <div className="mp-bars"></div>
                        </div>
                        <div className="song-data">
                            <span className="mp-song-title">Sip Sip Song | Jasmine Sandlas | Jasmine Sandlas | Jasmine Sandlas | Jasmine Sandlas | Jasmine Sandlas</span>
                            <span className="mp-song-details">1400 Downloads</span>
                        </div>
                        <div className="mp-left-btn-cont">
                            <span data-tip="Remove from favourites." className="mp-left-btn mp-fav-btn">
                                <Icon type="regular" classes="fa-heart" />
                            </span>
                            <span data-tip="Download this song." className="mp-left-btn mp-download-btn">
                                <Icon type="regular" classes="fa-download" />
                            </span>
                        </div>
                    </div>
                    <div className="mp-center">
                        <div className="mp-time">
                            <span className="mp-current-time">00:00</span>
                            <span> / </span>
                            <span className="mp-duration-time">00:00</span>
                        </div>

                        <span className="mp-control-btn">
                            <Icon classes="fa-repeat" type="regular" />
                        </span>

                        <span className="mp-control-btn">
                            <Icon classes="fa-angle-double-left" type="regular" />
                        </span>

                        <span className="mp-control-btn mp-play-btn">
                            <Icon classes="fa-play" type="regular" />
                        </span>

                        <span className="mp-control-btn">
                            <Icon classes="fa-angle-double-right" type="regular" />
                        </span>

                        <span className="mp-control-btn" data-tip="Copy link">
                            <Icon classes="fa-link" type="regular" />
                        </span>

                        <span className="mp-control-btn mp-volume-btn">
                            <div className="mp-vc-cont">
                                <input data-tip data-for="vol-cont-tip" id="volume-controller" type="range" className="mp-vc" min="0" max="100" value={this.state.volume} onChange={e => this.volumeChange(e)} />
                            </div>
                            <ReactTooltip id='vol-cont-tip' type='info' effect='solid'>
                                <span>{this.state.volume}</span>
                            </ReactTooltip>
                            <Icon classes="fa-volume-up" type="regular" />
                        </span>
                    </div>
                    <div className="mp-right">
                        <span data-tip="Next Song" className="mp-next-song">Tu Mera Hogaya Hai - Tadap</span>

                        <span data-tip="Full Screen" className="mp-expand-btn">
                            <Icon classes="fa-expand" type="regular" />
                        </span>
                    </div>
                </div>
                {/* <ReactTooltip type="info" effect="float" /> */}
            </React.Fragment>
        )
    }
}
