import React, { Component } from 'react'
import './sectiontitle.css'
import { Icon } from '../../components/Index'
export default class SectionTitle extends Component {
    render() {
        return (
            <div className="section-title-cont">
                <span className="sti">
                    <Icon classes={ this.props.iconClass } type="regular" />
                </span>
                <h3 className="section-title">{ this.props.title }</h3>
            </div>
        )
    }
}
