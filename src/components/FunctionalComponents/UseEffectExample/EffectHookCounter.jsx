import React, { useEffect, useState } from 'react'

function EffectHookCounter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // useEffect runs after each render as componentDidUpdate.
    // Need to place inside the component.
    // useEffect run again when the dependancy array changes.
    // Passing Empty array as second parameter of useEffect, 
    // makes to run the function only once as componentDidMount.
    // The function passed in useEffect can return a function 
    // called cleanup function, which will be run when the component
    // is unmounted as componentWillUnmount.
    // We can use multiple useEffect in same component.
    // Put all the depending callbacks inside useEffect.

    useEffect(() => {
        console.log("UseEffect - updating document title");
        document.title = `You clicked ${count} times`;
        
    }, [count])

    return (
        <div>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            <button 
                onClick={() => setCount(prevCount => prevCount + 1)} 
            >
                Click {count} times
            </button>        
        </div>
    )
}

export default EffectHookCounter
