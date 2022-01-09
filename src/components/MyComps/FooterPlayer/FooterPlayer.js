import React, { Component } from 'react'
import './footerplayer.css'
import './song-bars.css'

import ReactTooltip from 'react-tooltip';
import { Icon } from '../../../components/Index'
import func from '../../../assets/js/functions'
import playerFunc from '../../../assets/js/player'
import conf from '../../../conf'
import toast from 'react-hot-toast'

export default class FooterPlayer extends Component {

    state = {
        scrubberTooltipVal: 0,
        maxScrubberVal: 300,
        volume: 100,
        playing: false,
        isRepeating: false,
        currentTime: 0,
        muted: false
    }

    constructor(props) {
        super()
        this.audio = new Audio()
        this.audioLoop = null
    }

    loop = () => {
        this.audioLoop = setInterval(() => {
            let audioDuration = parseInt(this.audio.duration)
            let currentTime = parseInt(this.audio.currentTime)
            document.getElementById("scrubber").value = currentTime
            let playingState = this.audio.paused ? false : true
            this.setState({
                maxScrubberVal: audioDuration,
                currentTime: currentTime,
                playing: playingState,
                isRepeating: this.audio.loop
            })

        }, 500)

    }

    componentDidMount() {
        let scrubber = document.getElementById("scrubber")
        scrubber.addEventListener('mousemove', this.scrubber)
        this.playNewAudio(this.props.song_id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.song_id !== undefined && prevProps.song_id !== this.props.song_id) {
            this.audio.pause()
            this.playNewAudio(this.props.song_id);
        }
    }

    componentWillUnmount() {
        let scrubber = document.getElementById("scrubber")
        scrubber.removeEventListener('mousemove', this.scrubber)
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
        let result = playerFunc.secToMinSec(sec)
        return result.min + ":" + result.sec
    }

    volumeChange = e => {
        let value = e.target.value
        let val = ((value - 0) / 100) * 100
        let css = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + val + '%, #bdc3c7 ' + val + '%, #bdc3c7 100%)'
        document.getElementById("volume-controller").style.background = css
        this.setState({ volume: value }, () => {
            this.audio.volume = value / 100
        })
    }


    render() {
        return (
            <React.Fragment>
                <div className="footer-player-ph"></div>

                <div className="music-player" id="footer-player">
                    <div className="mp-seek">
                        <input data-for="scrubber-inp" data-tip type="range" min="0" max={this.state.maxScrubberVal || 0} id="scrubber" onChange={e => this.seek(e.target.value)} />
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
                            <span className="mp-song-title" data-for="stitle" data-tip>{this.state.playingSongData?.title}</span>
                            <span className="mp-song-details">{this.state.playingSongData?.total_downloads} Downloads</span>
                            <ReactTooltip id='stitle' type='dark' effect='solid'>
                                <span>{this.state.playingSongData?.title}</span>
                            </ReactTooltip>
                        </div>
                        <div className="mp-left-btn-cont">
                            <span data-tip="Set as favourites" className="mp-left-btn mp-fav-btn" onClick={this.markAsFav}>
                                <Icon type="regular" classes="fa-heart" />
                            </span>
                            <span data-tip="Download this song." className="mp-left-btn mp-download-btn" onClick={this.download}>
                                <Icon type="regular" classes="fa-download" />
                            </span>
                        </div>
                    </div>
                    <div className="mp-center">
                        <div className="mp-time">
                            <span id="current-time" className="mp-current-time" data-tip="Current Time">{playerFunc.secToMinSec(this.state.currentTime).min + ":" + playerFunc.secToMinSec(this.state.currentTime).sec}</span>
                            <span> / </span>
                            <span className="mp-duration-time" data-tip="Total Duration">{playerFunc.secToMinSec(this.state.maxScrubberVal).min + ":" + playerFunc.secToMinSec(this.state.maxScrubberVal).sec}</span>
                        </div>

                        <span className="mp-control-btn" onClick={this.repeat}>
                            <Icon classes={this.state.isRepeating ? 'fa-repeat-1-alt' : 'fa-repeat'} type="regular" />
                        </span>

                        <span className="mp-control-btn">
                            <Icon classes="fa-angle-double-left" type="regular" />
                        </span>

                        <span className="mp-control-btn mp-play-btn" onClick={this.toggle}>
                            <Icon classes={`${this.state.playing ? 'fa-pause' : 'fa-play'}`} type="regular" />
                        </span>

                        <span className="mp-control-btn">
                            <Icon classes="fa-angle-double-right" type="regular" />
                        </span>

                        <span className="mp-control-btn" data-tip="Copy link" onClick={this.copyLinkToClipboard}>
                            <Icon classes="fa-link" type="regular" />
                        </span>

                        <span className="mp-control-btn mp-volume-btn">
                            <div className="mp-vc-cont">
                                <input data-tip data-for="vol-cont-tip" id="volume-controller" type="range" className="mp-vc" min="0" max="100" value={this.state.volume} onChange={e => this.volumeChange(e)} />
                            </div>
                            <ReactTooltip id='vol-cont-tip' type='info' effect='solid'>
                                <span>{this.state.volume}</span>
                            </ReactTooltip>
                            <span onClick={this.mute}><Icon classes={`${this.state.muted ? 'fa-volume-slash' : 'fa-volume-up'}`} type="regular" /></span>
                        </span>
                    </div>
                    <div className="mp-right">
                        <span data-tip="Next Song" className="mp-next-song">Login to get favourite tracks.</span>

                        <span data-tip="Full Screen" className="mp-expand-btn">
                            <Icon classes="fa-expand" type="regular" />
                        </span>
                    </div>
                </div>
                <ReactTooltip type="info" effect="float" />
            </React.Fragment>
        )
    }








    setAudio = url => {
        this.audio = new Audio(url)

        //  apply settings to the audio obj
        this.audio.volume = this.state.volume / 100

        // remain loop mode
        this.audio.loop = this.state.isRepeating
        this.setState({
            maxScrubberVal: this.audio.duration
        })
        return this.audio
    }

    playNewAudio = (sid) => {
        this.setState({ isPlaying: true }, () => {
            fetch(conf.API_URL + 'song?id=' + sid, {
                method: 'get',
                headers: {
                    "Content-Type": 'application/json'
                }
            })
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    throw new Error("Error")
                })
                .then(json => {
                    console.log(json)
                    if (json.status) {
                        this.setState({
                            playingSongData: json.data,
                            playing: true
                        }, () => {
                            this.audio.pause()
                            this.setAudio(json.data.file).play()
                            this.loop()
                        })
                    }
                    else {
                        console.log(json.error.message)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }


    play = () => {
        this.setState({
            playing: true
        }, () => {
            this.audio.play()
        })
    }

    pause = () => {
        this.setState({
            playing: false
        }, () => {
            this.audio.pause()
        })
    }

    toggle = () => {
        this.audio.paused ? this.play() : this.pause()
    }

    mute = () => {
        let state = this.state.muted
        this.setState({ muted: !state }, () => {
            this.audio.muted = !state
        })
    }

    stop = () => {
        this.audio.pause()
        this.audio.currentTime = 0
    }


    seek = sec => {
        this.audio.currentTime = sec
    }

    repeat = () => {
        let flag = !this.audio.loop
        this.setState({
            isRepeating: flag
        }, () => {
            this.audio.loop = flag
            flag ? toast.success("Repeat On", {
                position: 'bottom-left',
                style: {
                    border: '2px solid var(--dark-green)',
                    padding: '4px 16px',
                    color: 'var(--dark-green)',
                    minWidth: '120px'
                },
                iconTheme: {
                    primary: 'var(--dark-green)',
                    secondary: '#FFFAEE',
                },
            }) : toast.success("Repeat Off", {
                position: 'bottom-left',
                style: {
                    border: '2px solid var(--dark-red)',
                    padding: '4px 16px',
                    color: 'var(--dark-red)',
                    minWidth: '120px'
                },
                iconTheme: {
                    primary: 'var(--dark-red)',
                    secondary: '#FFFAEE',
                },
            })
        })
    }

    markAsFav = () => {
        if (this.props.isLogged) {
            console.log("Logged")
        }
        else {
            console.log("Not Logged")

        }
    }

    download = () => {
        let song_id = parseInt(this.state.playingSongData.song_id)
        let key = this.state.playingSongData.file_key
        window.open(conf.DOWNLOAD_SERVER_URL + '?file_id=' + song_id + '&auth_key=' + key, '_blank')
    }

    copyLinkToClipboard = () => {
        func.copyToClipboard(conf.APP_URL + 's/' + this.state.playingSongData.short_url)
        toast.success("Link copied to clipboard.", { position: 'bottom-left' })
    }
}
