import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => setIsLoggedIn((prev) => !prev);

    return (
        <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);


export const AuthButton = () => {
    const { isLoggedIn, toggleLogin } = useAuth();

    return (
        <button onClick={toggleLogin}>
            {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
        </button>
    );
};