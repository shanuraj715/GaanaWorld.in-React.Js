import React, { Component } from 'react'
import { Header, Footer, Icon, OtherFeatures, Breadcrumb, Login } from '../../../components/Index'
import './contactus.css'
import ci from '../../../assets/images/contact-us.svg'

export default class ContactUs extends Component {

    render() {
        return (
            <React.Fragment>
                <Header {...this.props} />
                <Breadcrumb data={[{title: "Contact Us", url: '#' }]} />
                <div className="cf-block">
                    <div className="cf-cont">
                        <div className="cf-left">
                            <span className="cf-left-design"></span>
                            <span className="cf-left-title">Contact Us</span>
                            <div className="">
                                <img src={ci} alt="" />
                            </div>
                        </div>
                        <div className="cf-right">
                            <div className="cf-r-ib">
                                <input type="text" className="" placeholder="Name" />
                            </div>
                            <div className="cf-r-ib">
                                <input type="email" className="" placeholder="Email" />
                            </div>
                            <div className="cf-r-ib">
                                <textarea className="" placeholder="Message"></textarea>
                            </div>
                            <div className="form-btn-cont">
                                <button className="form-submit-btn form-btn">Submit</button>
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
