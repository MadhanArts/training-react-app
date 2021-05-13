import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>Sorry</h1>
                <h3>Page Not Found</h3>
                <Link to="/" >Back To Homepage...</Link>                
            </div>
        )
    }
}

export default NotFound
