import React, { Component } from 'react'
import './breadcrumb.css'
import { Icon } from '../../components/Index'
import { Link } from 'react-router-dom'

export default class Breadcrumb extends Component {

    data = [
        {
            title: "Category 1",
            url: "/"
        },
        {
            title: "Category 2",
            url: "/"
        },
        {
            title: "Category 3",
            url: "/"
        },
        {
            title: "Full Song Name",
            url: ""
        }
    ]

    breadcrumb = () => this.data.map((item, index) => {
        return (
            item.url && item.url !== '' ? <React.Fragment key={ index }>
                <Link to={item.url} className="breadcrumb-link">{item.title}</Link>
                {index < this.data.length - 1 ? <Icon classes="fa-chevron-right mg-lr-10 breadcrumb-sap" type="solid" /> : null}
            </React.Fragment> : <React.Fragment key={ index }>
                <span className="breadcrumb-link">{item.title}</span>
                {index < this.data.length - 1 ? <Icon classes="fa-chevron-right mg-lr-10 breadcrumb-sap" type="solid" /> : null}
            </React.Fragment>
        )
    })

    render() {
        return (
            <div className="breadcrumb-cont">
                <Icon classes="fa-home" type="solid" />
                {this.data.length !== 0 ? <Icon classes="fa-chevron-right mg-lr-10 breadcrumb-sap" type="solid" /> : null}
                {this.breadcrumb()}
            </div>
        )
    }
}
