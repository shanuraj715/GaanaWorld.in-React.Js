import React, { Component } from 'react'
import { Icon } from '../../../../components/Index'
import './songshare.css'
import OutsideClickHandler from 'react-outside-click-handler'
import func from '../../../../assets/js/functions'
import toast from 'react-hot-toast'

export default class SongShare extends Component {

    setPageMaxHeight = () => {

    }

    copyText = () => {
        func.copyToClipboard(this.props.short_url)
        toast.success("Link copied to clipboard.", { position: 'top-center'})
    }

    render() {
        return (
            <div className="song-share-pc" id="song-share-mod" style={{ display: 'none' }}>
                <span className="song-share-close-btn" onClick={this.props.toggle}>
                    <Icon classes="fa-times" type="solid" />
                </span>
                <OutsideClickHandler onOutsideClick={() => {
                    if (document.getElementById("song-share-mod").style.display !== 'none') {
                        this.props.toggle()
                    }
                }} >
                    <div className="song-share-modal" id="song-share-modal">
                        <p className="song-share-mt">
                            <Icon classes="fa-share-alt pd-r-14" type="duotone" color1="#2d3436" color2="var(--dark-yellow)" />
                            Share Now
                        </p>
                        <div className="effect amiens">
                            <div className="buttons">
                                <a href={`${'https://www.facebook.com/sharer/sharer.php?u=' + this.props.short_url }`} target="_blank" className="ss-btn-fb" data-tip="Share on Facebook">
                                    <Icon classes="fa-facebook-f" type="brands" />
                                </a>
                                <a href={`${'whatsapp://send?text=Listen the song from %0A' + this.props.short_url }`} target="_blank" className="ss-btn-whatsapp" data-tip="Share on Whatsapp">
                                    <Icon classes="fa-whatsapp" type="brands" />
                                </a>
                                <a href={`${'tg://msg_url?url=' + this.props.short_url + '&text=Listen this awesome song ' }`} target="_blank" className="ss-btn-telegram" data-tip="Share on Telegram">
                                    <Icon classes="fa-telegram-plane" type="brands" />
                                </a>
                                <a href={`${'sms://?body= Listen this awesome song ' + this.props.short_url }`} target="_blank" className="ss-btn-sms" data-tip="Share via SMS">
                                    <Icon classes="fa-sms" type="regular" />
                                </a>
                                {/* <a href={`${'' + this.props.short_url }`} target="_blank" className="ss-btn-instagram" data-tip="Share via SMS">
                                    <Icon classes="fa-instagram" type="brands" />
                                </a> */}
                            </div>
                        </div>

                        <div className="ss-cpy-link-block">
                            <span className="hytgj">Or copy link</span>
                            <div className="ss-link-txt-c">
                                <span className="fs-red">
                                    <Icon classes="fa-link pd-r-10" type="regular" />
                                </span>
                                <span className="ss-link">
                                    { this.props.short_url }
                                </span>
                                <button onClick={ this.copyText }>Copy</button>
                            </div>

                        </div>
                    </div>
                </OutsideClickHandler>
            </div>
        )
    }

}


