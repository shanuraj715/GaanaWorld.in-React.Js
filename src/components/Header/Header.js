import React, { Component } from 'react'
import './header.css'
import Logo from '../../assets/images/site_title_image.png'
import { Link } from 'react-router-dom'
import { Icon } from '../../components/Index'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <Link to="/">
                        <img src={ Logo } alt="" />
                    </Link>
                    <span>Remix Your Mood With GaanaWorld.In</span>
                </div>

                <div className="header-right">
                    <div className="header-search-cont">
                        <input type="text" placeholder="Search here..." />
                        <button>
                            <Icon type="solid" classes="fa-search" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
