import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            <div
                style={{
                    minHeight: "100vh",
                    minWidth: "100vw",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: theme === "light" ? "#fff" : "#222",
                    color: theme === "light" ? "#222" : "#fff",
                    transition: "background 0.3s, color 0.3s",
                    zIndex: -1,
                }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme}>
            Cambiar a {theme === "light" ? "oscuro" : "claro"}
        </button>
    );
};