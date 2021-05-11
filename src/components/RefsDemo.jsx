import React, { Component } from 'react';

class RefsDemo extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.callbackRef = null;
        this.setCallbackRef = (element) => {
            this.callbackRef = element;
        }
    }

    componentDidMount() {
        if(this.callbackRef) {
            this.callbackRef.focus();
            console.log(this.callbackRef);
        }
        // this.inputRef.current.focus();
        // console.log(this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() { 
        return ( 
            <div>
                <input type="text" ref={this.inputRef} />
                <br />
                <input type="text" ref={this.setCallbackRef} />
                <br />
                <button onClick={this.clickHandler} >Click</button>
            </div>
         );
    }
}
 
export default RefsDemo;