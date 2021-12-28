import React, { Component } from 'react'
import conf from '../../conf'
import { Link } from 'react-router-dom'
import './footer.css'
import sr from '../../assets/images/sr.jpg'
import { Icon } from '../../components/Index'
import OutsideClickHandler from 'react-outside-click-handler'

export default class Footer extends Component {

    state = {
        cardVisible: false
    }

    toggleCardVisibility = () => {
        this.setState({ cardVisible: !this.state.cardVisible })
    }

    devCard = () => {
        return <div className="user-card-container">
            <span className="uc-close-btn" onClick={this.toggleCardVisibility}>
                <Icon classes="fa-times" type="solid" />
            </span>
            <OutsideClickHandler onOutsideClick={this.toggleCardVisibility}>
                <div className="card">
                    <div className="card__image-container">
                        <img className="card__image" src={sr} alt="" />
                    </div>

                    <svg className="card__svg" viewBox="0 0 800 500">

                        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
                    </svg>

                    <div className="card__content">
                        <h1 className="card__title">Shanu Raj</h1>
                        <p>I am a Full Stack Professional Web Developer.<br />
                            {/* Contact me for website making.<br /> */}
                            Mob: +91-9877936035</p>
                        <div className="effect varrius">
                            <div className="buttons">
                                <a className="uc-email" href="mailto:shanuraj715@gmail.com" title="">
                                    <Icon classes="fa-at" type="regular" />
                                </a>
                                <a className="uc-phone" href="tel:+919877936035" title="">
                                    <Icon classes="fa-phone" type="regular" />
                                </a>
                                <a className="uc-facebook" href="https://facebook.com/shanuraj715" target="_blank" title="">
                                    <Icon classes="fa-facebook-f" type="brands" />
                                </a>
                                <a className="uc-instagram" href="https://instagram.com/shanu_the_web_dev" target="_blank" title="">
                                    <Icon classes="fa-instagram" type="brands" />
                                </a>
                                <a className="uc-github" href="https://github.com/shanuraj715" target="_blank" title="">
                                    <Icon classes="fa-github" type="brands" />
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler >
        </div>
    }

    render() {
        return (
            <div className="footer">
                <p>
                    <span>Copyright © {new Date().getFullYear()} | {conf.APP_NAME} </span>
                    <span>- Developed By: <span onClick={this.toggleCardVisibility} className="footer-dev-name">Shanu Raj</span></span>
                </p>
                {this.state.cardVisible ? this.devCard() : null}
            </div>
        )
    }
}
