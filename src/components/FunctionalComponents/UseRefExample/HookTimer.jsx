import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0);
    
    // useRef returns a generic container which can store 
    // mutable value similar to instance properties in class component.

    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1);


        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)} >Clear Hook Timer</button>
        </div>
    )
}

export default HookTimer
