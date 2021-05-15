import React, { useEffect, useState } from 'react'

function HookMouse() {

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const setMousePosition = (event) => {
        console.log("Mouse Event");
        setX(event.clientX);
        setY(event.clientY)
    }

    useEffect(() => {
        console.log("UseEffect called");
        window.addEventListener("mousemove", setMousePosition);

        return () => {
            console.log("Component Unmounted");
            window.removeEventListener("mousemove", setMousePosition);
        }

    }, [])

    return (
        <div>
            Hook X - {X} Y - {Y}
        </div>
    )
}

export default HookMouse
