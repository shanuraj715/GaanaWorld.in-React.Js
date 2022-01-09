import React, { Component } from 'react'
import { Header, Footer, OtherFeatures, Breadcrumb } from '../../../components/Index'
import ci from '../../../assets/images/create-account.svg'
import conf from '../../../conf'

export default class CreateAccount extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Breadcrumb />
                <div className="cf-block">
                    <div className="cf-cont">
                        <div className="cf-left">
                            <span className="cf-left-design"></span>
                            <span className="cf-left-title">Create Account</span>
                            <div className="">
                                <img src={ci} alt="" />
                            </div>
                        </div>
                        <div className="cf-right">
                            <div className="cf-r-ib">
                                <span style={{color: 'white', fontSize: '20px'}}>Any song remixer or any music producer can get their account on { conf.APP_NAME }.<br />
                                Creation of account is absolutely free.<br /><br />
                                To get your own account, you need to contact the admin.<br /><br />
                                Whatsapp: +91-9877936035<br />
                                Email: shanuraj715@gmail.com
                                </span>
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
