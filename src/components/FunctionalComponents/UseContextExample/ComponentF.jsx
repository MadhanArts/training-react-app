import React from 'react'
import { UserContext, ChannelContext } from './ParentContext'

function ComponentF() {
    return (
        <UserContext.Consumer>
            {
                username => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div>Hello {username}, {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default ComponentF
