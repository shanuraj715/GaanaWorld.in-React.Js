import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import conf from '../../conf'
import Err404 from '../Err404/Err404'
export default class ShortLinkRedirector extends Component {

    state = {redirectTo: ''}

    componentDidMount(){
        let url = window.location.href
        let arr = url.split('/')
        let str = arr[arr.length - 1] !== '' ? arr[arr.length - 1] : arr[arr.length - 2]
        fetch(conf.API_URL + 'getLink?str=' + str, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        })
        .then( res => {
            if( res.ok ){
                return res.json()
            }
            throw new Error("Error")
        })
        .then( json => {
            console.log( json )
            if( json.status ){
                this.setState({redirectTo: json.data.ref_page})
            }
        })
        .catch( err => {
            console.log( err )

        })
    }
    render() {
        return (
            this.state.redirectTo !== '' ? <Redirect to={ '/' + this.state.redirectTo } /> : null
        )
    }
}
