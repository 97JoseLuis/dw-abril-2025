import React, { createContext, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const username = 'José Luis';

    return (
        <UserContext.Provider value={{ username }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserName = () => {
    const { username } = useContext(UserContext);
    return <div>Usuario: {username}</div>;
};