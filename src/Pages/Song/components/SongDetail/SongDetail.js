import React, { Component } from 'react'
import { Icon } from '../../../../components/Index'
import { Link } from 'react-router-dom'
import image from '../../../../assets/images/sr.jpg'
import './songdetail.css'
import SongShare from '../SongShare/SongShare'

export default class SongDetail extends Component {
    render() {
        return (
            <>
            <div className="song-detail-cont">
                <div className="sd-left">
                    <img src={ image } alt="" />
                </div>

                <div className="sd-center">
                    <h1 className="sd-song-title">
                        <Icon type="duotone" classes="fa-play pd-r-14" color1="var(--dark-pink)" color2="var(--light-yellow)" />    
                        <span>Full Song Name Here</span>
                    </h1>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Category: </span>
                        <span className="sd-data-rd">Dj ABCDEFGH</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Singer: </span>
                        <span className="sd-data-rd">Unknown</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Added: </span>
                        <span className="sd-data-rd">19-Dec-2021 08:24 AM</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">File Size: </span>
                        <span className="sd-data-rd">8.2 MB</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Length: </span>
                        <span className="sd-data-rd">05 Min 27 Sec</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Total Downloads: </span>
                        <span className="sd-data-rd">101 Times</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Short URL: </span>
                        <span className="sd-data-rd sd-short-link">https://gaanaworld.in/s/aBcd</span>
                        <span className="pd-l-6 sd-data-lc-btn" data-tip="Copy Link">
                            <Icon classes="fa-link" type="solid" />
                        </span>
                    </p>
                </div>

                <div className="sd-right">

                </div>
            </div>
            </>
        )
    }
}
