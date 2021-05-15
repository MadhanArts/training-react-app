import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0);

    

    useEffect(() => {
        console.log("calling useEffect");
        function tick() {
            console.log("Calling tick");
            setCount(prevCount => prevCount + 1)
        }
        const interval = setInterval(tick, 1000);
        return () => {
            console.log("Calling cleanup");
            clearInterval(interval)
        }
    }, [])

    return (
        <h2>{ count }</h2>
    )
}

export default IntervalHookCounter
