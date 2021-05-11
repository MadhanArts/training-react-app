import React, { Component } from 'react';


// Error Boundary are react components that catch 
// Javascript errors in their child components 
// tree, log those errors, and display a fall-back UI.

// Errors are catched only when it occured in constructor or render method
// A class component become an Error Boundary by defining 
// either or both of getDerivedStateFromError and 
// componentDidCatch lifecycle methods

// We need to Enclose the Error Possible tags with the Error Boundary tag

class ErrorBoundary extends Component {
    state = { 
        hasError: false
     }

     static getDerivedStateFromError(error) {
         return {
             hasError: true
         }
     }

     componentDidCatch(error, info) {
         console.log(error);
         console.log(info);
     }

    render() { 
        
        if(this.state.hasError)
        {
            console.log("Error occured");
            return (
                <h1>Something Went Wrong</h1>
            );
        }
        return this.props.children;
    }
}
 
export default ErrorBoundary;