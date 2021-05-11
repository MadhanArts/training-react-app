import React from 'react';

// Higher Order Component or HOC is a pattern in which a 
// function takes a component and returns a new Enhanced 
// component

// HOC is used to share the common functionality between the component
// without duplicating it

const withCounter = (WrappedComponent, increment) => {

    class WithComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState({
                count: this.state.count + increment
            });
            // console.log(this.state.count);
        }

        render() { 
            return ( 
                <WrappedComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount} 
                {...this.props} 
                /* This is the way to send all the props to child props */
                />
             );
        }
    }
    
    return WithComponent;
}

export default withCounter;