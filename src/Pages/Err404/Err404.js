import React, { Component } from 'react'
import { Header, Footer, OtherFeatures } from '../../components/Index'
import './err404.css'
import { Link } from 'react-router-dom'

export default class Err404 extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <div></div>
                            <h1>404</h1>
                        </div>
                        <h2>Page not found</h2>
                        <p>The page or file you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Link to="/">Home</Link>
                    </div>
                </div>

                <OtherFeatures />
                <Footer />
            </React.Fragment>
        )
    }
}
