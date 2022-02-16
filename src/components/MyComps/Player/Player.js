import React, { Component } from 'react'
import './player.css'
import './cards.css'
import { Icon } from '../../Index'
import conf from '../../../conf'
import playerFunc from '../../../assets/js/player'
import Queue from './comps/Queue/Queue'
import ReactTooltip from 'react-tooltip';
import toast from 'react-hot-toast'

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

		console.log(this.props)
	}

	componentWillUnmount() {
		document.body.style.maxHeight = 'initial';
		document.body.style.minHeight = 'initial';
		document.body.style.minWidth = 'initial';
		document.body.style.maxWidth = 'initial';
		document.body.style.overflow = 'initial';

		clearInterval(this.interval)
		clearTimeout(this.closeTimeOut)
	}

	scrubberOnChangeHandler = () => {
		const e = document.getElementById("scrubber")
		const max = e.max
		const value = e.value

		e.style.backgroundSize = (value / max) * 100 + "%"


	}

	minimize = () => {
		let elem = document.getElementById("full-player")
		elem.classList.remove("pd-open-anim")
		elem.classList.add("pd-close-anim")
		this.closeTimeOut = setTimeout(() => {
			this.props.togglePlayer()
		}, 500)
	}

	render() {
		return (
			<div className="full-player theme-light pd-open-anim" id="full-player" onContextMenu={e => {e.preventDefault(); toast.error("Right click disabled", {position: 'bottom-left'})}}>
				<Queue />
				<button className="pd-minimize-btn" onClick={this.minimize} data-tip="Minimize">
					<Icon classes="fa-window-minimize" type="solid" />
				</button>
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
								<input type="range" id="scrubber" className="pd-scrubber" min="0"
									max={this.props.maxScrubberVal || 0} onChange={e => this.props.seek(e.target.value)} />
								<div className="pd-time-cont">
									<span className="pd-curr-time">
										{playerFunc.secToMinSec(this.props.currentTime).min}:{playerFunc.secToMinSec(this.props.currentTime).sec}
									</span>
									<span className="pd-duration">
										{playerFunc.secToMinSec(this.props.maxScrubberVal).min}:{playerFunc.secToMinSec(this.props.maxScrubberVal).sec}
									</span>
								</div>
							</div>
							<div>
								<div className="player-btn-cont">
									<button className={'player-more-btn pd-fav-btn ' + `${this.props.isFavorite ? 'pd-fav-btn-marked' : ''}`}
										data-tip={this.props.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
										onClick={this.props.markAsFav}
									>
										<Icon classes="fa-heart" type={`${this.props.isFavorite ? 'solid' : 'regular'}`} />
									</button>
									<button className="player-more-btn pd-download-btn" data-tip="Download this audio." onClick={this.props.download}>
										<Icon classes="fa-download" type="regular" />
									</button>
									<button className="player-more-btn pd-repeat-btn" data-tip="Enable repeat." onClick={this.props.repeat}>
										<Icon classes={this.props.isRepeating ? 'fa-repeat-1-alt' : 'fa-repeat'} type="regular" />
									</button>
									<button className="player-more-btn pd-copy-link-btn" data-tip="Copy link. (Ctrl + C)" onClick={this.props.copyLink}>
										<Icon classes="fa-link" type="regular" />
									</button>
									<button className="player-more-btn pd-volume-btn" data-tip="Mute/Unmute" onClick={this.props.mute}>
										<Icon classes={`${this.props.muted ? 'fa-volume-slash' : 'fa-volume-up'}`} type="regular" />
									</button>
									<div className="">
										<input type="range" className="pd-vol-cont"
											id="volume-controller" min="0" max="100"
											value={this.props.volume}
											onChange={e => this.props.volumeChange(e)}
										/>
									</div>
								</div>
							</div>

							<div className="player-data-row player-control-btn-cont">
								<button className="pd-control-btn pd-prev-btn" onClick={() => { }}>
									<Icon classes="fa-angle-double-left" type="solid" />
								</button>
								<button className="pd-control-btn pd-play-pause-btn" onClick={this.props.toggle}>
									<Icon classes={`${this.props.playing ? 'fa-pause' : 'fa-play'}`} type="regular" />
								</button>
								<button className="pd-control-btn pd-next-btn" onClick={() => { }}>
									<Icon classes="fa-angle-double-right" type="solid" />
								</button>
							</div>
						</div>
					</div>

					<h2 className="pd-fs-title">Favourite Songs</h2>
					<div className="pd-cards-cont">
						{this.props.favList?.map((item, index) => {
							return (
								<div className="pd-card" key={index} onClick={() => this.props.playNewAudio(item.song_id)}>
									<div className="pd-card-left">
										<span className="pd-card-icon">
											<Icon classes="fa-music" type="solid" />
										</span>
									</div>
									<div className="pd-card-data">
										<p className="pd-card-title" data-tip={item.title}>{item.title}</p>
										<span className="pd-card-desc">{item.category_name}</span>
									</div>
								</div>
							)
						})}



					</div>
				</div>
				<ReactTooltip type="dark" effect="float" delayShow={200} />
			</div>
		)
	}

}
