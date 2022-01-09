import React, { Component } from 'react'
import { Header, Footer, Breadcrumb, OtherFeatures } from '../../../components/Index'
import ci from '../../../assets/images/about-us.svg'
import conf from '../../../conf'
import { Link } from 'react-router-dom'

export default class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Breadcrumb />
                <div className="cf-block">
                    <div className="cf-cont">
                        <div className="cf-left">
                            <span className="cf-left-design"></span>
                            <span className="cf-left-title">About Us</span>
                            <div className="cf-li">
                                <img src={ci} alt="" />
                            </div>
                        </div>
                        <div className="cf-right">
                            <div className="cf-r-ib">
                                <span style={{color: 'white', fontSize: '20px'}}>{ conf.APP_NAME } is Developed and Maintained by Mr. Shanu Raj from INDIA.<br />
                                This is a free app and anyone can use this app to listen and download their favourite remix songs.<br /><br />
                                This is also free for music producers and remixers. This is used by many creators and you also can join us by creating an account.<br /><br />
                                To create an account visit <Link to="/create-account"><strong style={{color: "var(--dark-red"}}>Create Account</strong></Link> page for more information.</span>
                            </div>
                        </div>
                    </div>

                </div>
                <OtherFeatures />
                <Footer />
            </React.Fragment>
        )
    }
}
