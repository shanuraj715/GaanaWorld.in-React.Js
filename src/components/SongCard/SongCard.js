import React, { Component } from 'react'
import { Icon } from '../Index'
import './songcard.css'
import { Link } from 'react-router-dom'

export default class SongCard extends Component {
    render() {
        return (
            <Link className="song-card" to="/">
                <div className="song-card-logo">
                    <Icon type="duotone" classes="fa-music" color1="var(--light-black)" color2="var(--light-red)" />
                </div>
                <div className="song-card-data">
                    <p className="song-card-st">Full Song Name - GaanaWorld.in</p>
                    <p className="song-card-sd">
                        <span>Category Name</span>
                        <span>Singer Name</span>
                        <span>Total Downloads</span>
                    </p>
                </div>
            </Link>
        )
    }
}
