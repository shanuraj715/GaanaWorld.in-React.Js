import React, { Component } from 'react'
import './header.css'
import Logo from '../../assets/images/site_title_image.png'
import { Link, Redirect } from 'react-router-dom'
import { Icon } from '../../components/Index'
import toast from 'react-hot-toast'

export default class Header extends Component {

    handleKeyPress = event => {
        if (event.which === 13 && this.state.string !== '') {
            this.setState({
                redirectTo: '/search/' + this.state.string
            })
        }
    }

    handleSearchBtn = () => {
        if (this.state.string !== '') {
            this.setState({ redirectTo: '/search/' + this.state.string })
        }
        else {
            toast.error("Invalid search string.", { position: 'bottom-left' })
        }
    }

    state = {
        string: '',
        redirectTo: ''
    }
    render() {
        return (
            <React.Fragment>
                {this.state.redirectTo !== '' ? <Redirect to={this.state.redirectTo} /> : null}
                <div className="header">
                    <div className="header-left">
                        <Link to="/">
                            <img src={Logo} alt="" />
                        </Link>
                        <span>Remix Your Mood With GaanaWorld.In</span>
                    </div>

                    <div className="header-center">
                        <div className="header-search-cont">
                            <input type="text" placeholder="Search here..." value={this.state.string} onChange={e => this.setState({ string: e.target.value })} onKeyPress={e => this.handleKeyPress(e)} />
                            <button onClick={this.handleSearchBtn}>
                                <Icon type="solid" classes="fa-search" />
                            </button>
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="header-user-navbar">
                            <button className="header-user-btn">
                                <Icon type="solid" classes="fa-user" />
                            </button>
                            <div className="header-um-dropdown">
                                <span className="hdd-username">Shanu Raj</span>
                            </div>
                        </div>


                    </div>
                </div>
            </React.Fragment>
        )
    }
}
