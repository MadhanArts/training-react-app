import React from 'react';

// Context is way to pass the value from parent component 
// to is grand child component

// Context provides a way to pass data through the component
// tree without having to pass props down manually at every level

// The default value will be used only if the value was not 
// provided in Provider tag
const UserContext = React.createContext("Arts");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
export default UserContext;
