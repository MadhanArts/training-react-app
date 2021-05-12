import React, { Component } from 'react';

// Render Props is the way to share the common fuctionality
// between Components by passing function using props

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                {/* {this.props.render(this.state.count, this.incrementCount)} */}
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counter
