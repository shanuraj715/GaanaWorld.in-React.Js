import React, { Component } from 'react'
import { Icon } from '../../../../components/Index'
import './songdetail.css'
import conf from '../../../../conf'
import func from '../../../../assets/js/functions'
import toast from 'react-hot-toast'
import loading from '../../../../assets/images/loading.svg'

export default class SongDetail extends Component {
    render() {
        return (
            <>
            <div className="song-detail-cont">
                <div className="sd-left">
                    <img src={ this.props.data.thumb || loading } alt="" />
                </div>

                <div className="sd-center">
                    <h1 className="sd-song-title">
                        <Icon type="duotone" classes="fa-play pd-r-14" color1="var(--dark-pink)" color2="var(--light-yellow)" />    
                        <span>{ this.props.data.title }</span>
                    </h1>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Category: </span>
                        <span className="sd-data-rd">{ this.props.data.cat_name }</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Singer: </span>
                        <span className="sd-data-rd">{ this.props.data.singer_name }</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Added: </span>
                        <span className="sd-data-rd">{ this.props.data.added_on + ' ' + this.props.data.added_at }</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">File Size: </span>
                        <span className="sd-data-rd">{ this.props.data.size }</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Length: </span>
                        <span className="sd-data-rd">{ this.props.data.length }</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Total Downloads: </span>
                        <span className="sd-data-rd">{ this.props.data.total_downloads }</span>
                    </p>
                    <p className="sd-data-row">
                        <Icon type="regular" classes="fa-hand-point-right pd-r-6" />
                        <span className="sd-data-rt mg-r-10">Short URL: </span>
                        <span className="sd-data-rd sd-short-link">{ conf.APP_URL + 's/' + (this.props.data.short_url || '_____') }</span>
                        <span className="pd-l-6 sd-data-lc-btn" data-tip="Copy Link" onClick={ () => this.copyLinkToClipboard(conf.APP_URL + 's/' + this.props.data.short_url) }>
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

    copyLinkToClipboard = (str) => {
        func.copyToClipboard(str)
        toast.success("Link copied to clipboard.", { position: 'bottom-left' })
    }
}
