import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        
        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;

        default:
            return state;
    }
}

function CounterOne() {

    // dispatch("action") is used to change the value of counter.
    // It will call reducer function and change the count value.
    // Using useReducer() we can customize the state value
    // We can use objects as the initial state.
    // We can pass action such that we can conditinally update the state.
    // We can also use the same reducer function to create multiple 
    // useReducer state values.
    // We can share the state among different components using useReducer
    // and useContext.
    

    const [ count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - {count}</div>
            <button 
                onClick={() => dispatch('increment')} >
                Increment
            </button>
            <button 
                onClick={() => dispatch('decrement')} >
                Decrement
            </button>
            <button 
                onClick={() => dispatch('reset')} >
                Reset
            </button>
        </div>
    )
}

export default CounterOne
