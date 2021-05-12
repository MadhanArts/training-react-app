import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {

    // This method is restricted to use only 1 context
    static contextType = UserContext;

    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext;

export default ComponentE
