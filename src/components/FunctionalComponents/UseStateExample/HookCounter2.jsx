import React, { useState } from 'react'

function HookCounter2() {
    const initialCount = 0;
    const [counter, setCounter] = useState(0);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCounter(prevState => prevState + 1)
        }
    }

    return (
        <div>
            Count : {counter}
            <button onClick={() => setCounter(initialCount)} >Reset</button>
            <button onClick={() => setCounter(prevState => prevState + 1)} >Increment</button>
            <button onClick={() => setCounter(prevState => prevState - 1)} >Decrement</button>
            <button onClick={incrementFive} >Increment 5</button>
        </div>
    )
}

export default HookCounter2;