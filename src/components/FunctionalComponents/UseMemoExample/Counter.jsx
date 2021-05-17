import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    // useMemo is a hook which will compute the cached value
    // when one of the dependency is changed.
    // It is similar to useCallback hook.
    // useMemo caches the result of a function and useCallback 
    // caches the function itself.
    // When need to caches a result of a function, use useMemo.
    // When need to caches a function itself, use useCallback.
    

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) {
            i++;
        }
        return counterOne % 2 === 0;
    }, [counterOne])
    
    return (
        <div>
            <div>
                <button onClick={incrementOne} >Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo} >Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
