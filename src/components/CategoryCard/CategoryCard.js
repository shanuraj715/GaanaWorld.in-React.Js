import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Index'
import './categorycard.css'

export default class CategoryCard extends Component {
    render() {
        return (
            <Link className="category-card" to="/">
                <span>
                    <Icon classes="fa-arrow-alt-right" type="duotone" color1="var(--light-red)" color2="var(--light-pink)" />
                </span>
                <span>Category Card Link</span>
            </Link>
        )
    }
}
