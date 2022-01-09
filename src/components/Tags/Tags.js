import React, { Component } from 'react'
import './tags.css'
import { Title } from '../Index'

export default class Tags extends Component {
    render() {
        // console.log(this.props.data )
        return <div className="tags-block">
            <Title iconClass="fa-tags" title="Tags Related To This Page" />
            <div className="tags-container">
                <div className="tags-list">
                    {this.props.data.map((item, index) => {
                        return <span className="tag-text" key={index}>{item}</span>

                    })}
                </div>
            </div>
        </div>
    }
}
