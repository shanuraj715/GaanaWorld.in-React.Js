import React, { Component } from 'react'
import './header.css'
import Logo from '../../assets/images/site_title_image.png'
import { Link, Redirect } from 'react-router-dom'
import { Icon } from '../../components/Index'
import toast from 'react-hot-toast'
import conf from '../../conf'
import Cookie from 'universal-cookie'

const cookies = new Cookie()

export default class Header extends Component {

    componentDidMount() {

    }

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

    logout = () => {
        fetch(conf.API_URL + 'user/logout', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'sessid': cookies.get("PHPSESSID")
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error")
            })
            .then(json => {
                console.log(json)
                if (json.status) {
                    window.location.reload()
                }
                else {

                }
            })
            .catch(err => {
                console.log(err)
            })
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
                                <span className="hdd-username">{this.props.userName || "*************"}</span>

                                {this.props.isLogged ?
                                    <>
                                        <button className="hu-link">My Favorites</button>
                                        <button className="hu-link">Profile Settings</button>
                                        <button className="hu-link hu-logout" onClick={this.logout}>Logout</button>
                                    </> : <>
                                        <button className="header-drop-btn drop-btn-signin" onClick={() => this.props.toggleLoginFormVisibility()}>Sign In</button>
                                        <button className="header-drop-btn drop-btn-signup">Sign Up</button>
                                    </>}

                            </div>
                        </div>


                    </div>
                </div>
            </React.Fragment >
        )
    }
}
