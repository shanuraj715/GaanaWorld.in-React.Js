import React, { Component } from 'react'
import { Icon } from '../../../../components/Index'
import './songshare.css'

export default class SongShare extends Component {

    state = {
        visible: true
    }

    setPageMaxHeight = () => {

    }

    render() {
        return (
            <>
            {/* { this.state.visible ? <> */}
                <div className="song-share-pc">
                    <span className="song-share-close-btn">
                        <Icon classes="fa-times" type="solid" />
                    </span>
                    <div className="">
                        <p className="">
                            <Icon classes="fa-share-alt" type="duotone" color1="" color2="" />
                            Share Now
                        </p>
                        <div className="effect amiens">
                            <div className="buttons">
                                <a href="/" className="fb" title="Join us on Facebook">
                                    <Icon classes="fa-facebook-f" type="brands"  />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </> : null } */}
            </>
        )
    }
}
