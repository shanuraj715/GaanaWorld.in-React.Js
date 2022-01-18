import React, { Component } from 'react'

export default class PointerFollower extends Component {

    componentDidMount() {
        document.addEventListener('mousemove', e => this.mouseMove(e))
    }

    state = {
        followPointerX: 0,
        followPointerY: 0
    }

    mouseMove = e => {
        this.setState({
            followPointerX: e.pageX - 12,
            followPointerY: e.pageY - 12 
        })
    }

    render() {
        return (
            <span className="pointer-follow" style={{
                top: this.state.followPointerY,
                left: this.state.followPointerX
            }}></span>
        )
    }
}

// CSS OF THIS FILE IS WRITTEN IN THE MAIN INDEX.CSS FILE