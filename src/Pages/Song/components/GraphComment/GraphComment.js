import React, { Component } from 'react'

export class GraphComment extends Component {

    componentDidMount() {
        this.graphComment()
    }

    graphComment = () => {
		
		document.getElementById("graphcomment").innerHTML = ''
		var gc_params = {

			graphcomment_id: 'GaanaWorld',
			target: document.getElementById('#graphcomment'), // optional, #graphcomment by default

		};

		window.graphcomment(gc_params);
	}

    render() {
        return (
            <div id="graphcomment"></div>
        )
    }
}

export default GraphComment
