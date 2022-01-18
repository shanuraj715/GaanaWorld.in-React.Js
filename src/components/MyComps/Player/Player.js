import React, { Component } from 'react'
import './player.css'
import { Header, Footer } from '../../Index'

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
        return (
            <div className="f-music-player">
                <div className="f-music-left">

                </div>
                <div className="f-music-right">

                </div>
            </div>
        )
    }
}
