import React, { useState } from 'react'

function HookObject() {

    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    })

    return (
        <form>
            First Name : 
            <input 
                type="text"
                value={name.firstName}       
                onChange={(e) => setName({ ...name, firstName: e.target.value })}         
                />
            <br />
            Last Name : 
            <input 
                type="text"
                value={name.lastName}  
                onChange={(e) => setName({ ...name, lastName: e.target.value })}              
                />
            <br />
            <h2>Your First Name is - {name.firstName}</h2>
            <h2>Your Last Name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookObject;
