import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../Index'
import './otherfeatures.css'

export default class OtherFeatures extends Component {
    render() {
        return (
            <div className="other-features-cont">
                <Title iconClass="fa-lightbulb-on" title="Other Features" />
                <div className="other-feature-links">
                    <Link className="custom-btn btn-three" to="/">
                        <span>Download App</span>
                    </Link>
                    <Link className="custom-btn btn-three" to="/contact-us">
                        <span>Contact Us</span>
                    </Link>
                    <Link className="custom-btn btn-three" to="/create-account">
                        <span>Create Account</span>
                    </Link>
                    <Link className="custom-btn btn-three" to="/about-us">
                        <span>About Us</span>
                    </Link>
                    <Link className="custom-btn btn-three" to="/privacy-policy">
                        <span>Privacy Policy</span>
                    </Link>
                    <Link className="custom-btn btn-three" to="/copyright-policy">
                        <span>Copyright Policy</span>
                    </Link>
                </div>
            </div>
        )
    }
}
