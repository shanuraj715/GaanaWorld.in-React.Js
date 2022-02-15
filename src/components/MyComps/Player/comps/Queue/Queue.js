import React, { Component } from 'react';
import { Icon } from '../../../../Index'
import OutsideClickHandler from 'react-outside-click-handler'
import './queue.css'

export default class Queue extends Component {

    state = {
        queue_visible: false
    }

    toggleQueue = () => {
        this.setState({
            queue_visible: !this.state.queue_visible
        })
    }


    render() {
        return <OutsideClickHandler
            onOutsideClick={this.state.queue_visible ? this.toggleQueue : () => {}}>
            <div className={'fp1-queue-cont ' + `${this.state.queue_visible ? "queue-opened" : 'queue-closed'}`}>
                <div className="fp1-queue-btn-cont">
                    <span className="fp1-queue-title">
                        <Icon classes="fa-list pd-r-10" type="regular" />Queue
                    </span>
                    <span className="fp1-queue-btn" onClick={this.toggleQueue}>
                        <Icon classes={`${this.state.queue_visible ? "fa-chevron-double-left" : "fa-chevron-double-right"}`} type="duotone" color1="var(--dark-green)" color2="var(--light-green)" />
                    </span>
                </div>
                <div className="queue-list-cont">
                    <div className="player-song-row" onClick={() => { console.log("Clicked") }}>
                        <div className="song-card-logo">
                            <Icon type="duotone" classes="fa-music" color1="var(--light-black)" color2="var(--light-red)" />
                        </div>
                        <div className="song-card-data">
                            <p className="song-card-st">{this.props.title || ''}</p>
                            <p className="song-card-sd">
                                <span>{this.props.field1}</span>
                                <span>{this.props.field2}</span>
                                <span>{this.props.field3}</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </OutsideClickHandler>

    }
}
