import React, { Component } from 'react'
import './breadcrumb.css'
import { Icon } from '../../components/Index'
import { Link } from 'react-router-dom'

export default class Breadcrumb extends Component {

    data = []

    generateUrl = (id) => {
        return '/category/' + id
    }

    breadcrumb = () => this.props.data?.map((item, index) => {
        return (
            item.id && (item.id !== '' && item.id !== '#') ? <React.Fragment key={ index }>
                <Link to={ this.generateUrl(item.id)} className="breadcrumb-link">{item.title}</Link>
                {index < this.props.data.length - 1 ? <Icon classes="fa-chevron-right mg-lr-10 breadcrumb-sap" type="solid" /> : null}
            </React.Fragment> : <React.Fragment key={ index }>
                <span className="breadcrumb-link">{item.title}</span>
                {index < this.props.data.length - 1 ? <Icon classes="fa-chevron-right mg-lr-10 breadcrumb-sap" type="solid" /> : null}
            </React.Fragment>
        )
    })

    render() {
        return (
            <div className="breadcrumb-cont">
                <Link to="/"><Icon classes="fa-home" type="solid" /></Link>
                <Icon classes="fa-chevron-right mg-lr-10 breadcrumb-sap" type="solid" />
                {this.data.length !== 0 ? <Icon classes="fa-chevron-right mg-lr-10 breadcrumb-sap" type="solid" /> : null}
                {this.breadcrumb()}
            </div>
        )
    }
}
