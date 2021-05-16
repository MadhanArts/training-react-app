import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ParentContext() {
    return (
        <UserContext.Provider value={'Madhan'} >
            <ChannelContext.Provider value={['Arts', 'hello']} >
                <ComponentC />
            </ChannelContext.Provider>
        </UserContext.Provider>
    )
}

export default ParentContext
