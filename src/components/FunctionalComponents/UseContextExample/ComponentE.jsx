import React, { useContext } from 'react'
// import ComponentF from './ComponentF'
import { ChannelContext, UserContext } from './ParentContext'

function ComponentE() {

    // useContext accepts the context object and returns the
    // value passed by the provider
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            {/* <ComponentF /> */}
            {user} - {channel}
        </div>
    )
}

export default ComponentE
