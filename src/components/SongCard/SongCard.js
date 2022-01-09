import React, { Component } from 'react'
import { Icon } from '../Index'
import './songcard.css'
import { Link } from 'react-router-dom'

export default class SongCard extends Component {
    render() {
        return (
            <Link className="song-card" to={ this.props.url || '/' }>
                <div className="song-card-logo">
                    <Icon type="duotone" classes="fa-music" color1="var(--light-black)" color2="var(--light-red)" />
                </div>
                <div className="song-card-data">
                    <p className="song-card-st">{ this.props.title || '' }</p>
                    <p className="song-card-sd">
                        <span>{ this.props.field1 }</span>
                        <span>{ this.props.field2 }</span>
                        <span>{ this.props.field3 }</span>
                    </p>
                </div>
            </Link>
        )
    }
}
