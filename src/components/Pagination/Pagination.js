import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './pagination.css'
import { Icon } from '../Index'
export default class Pagination extends Component {
    render() {
        return (
            <div className="pagination-cont">
                <ul className="page">
                    <Link to="/">
                        <li className="page__btn">
                            <Icon classes="fa-chevron-left" type="regular" />
                        </li>
                    </Link>

                    <li className="page__numbers"> 1</li>
                    <Link to="/">
                        <li className="page__numbers active">2</li>
                    </Link>
                    <Link to="/">
                        <li className="page__numbers">3</li>
                    </Link>
                    <Link to="/">
                        <li className="page__numbers">4</li>
                    </Link>
                    <Link to="/">
                        <li className="page__numbers">5</li>
                    </Link>
                    <Link to="/">
                        <li className="page__numbers">6</li>
                    </Link>
                    <li className="page__dots">...</li>
                    <Link to="/">
                        <li className="page__numbers"> 10</li>
                    </Link>
                    <Link to="/">
                        <li className="page__btn">
                            <Icon classes="fa-chevron-right" type="regular" />
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}
