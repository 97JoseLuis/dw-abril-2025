import React, { useState, useEffect, useRef } from "react";

const baseButtonStyle = {
    padding: "10px 20px",
    margin: "0 8px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background 0.3s, color 0.3s",
};

const lightTheme = {
    background: "#f5f5f5",
    color: "#222",
    transition: "background 0.5s, color 0.5s",
};

const darkTheme = {
    background: "#222",
    color: "#f5f5f5",
    transition: "background 0.5s, color 0.5s",
};

const AUTO_MODE_KEY = "autoMode";
const DARK_MODE_KEY = "darkMode";
const FONT_SIZE_KEY = "fontSize";

export default function Interfaz() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem(DARK_MODE_KEY);
        return saved ? JSON.parse(saved) : false;
    });
    const [fontSize, setFontSize] = useState(() => {
        const saved = localStorage.getItem(FONT_SIZE_KEY);
        return saved ? Number(saved) : 16;
    });
    const [autoMode, setAutoMode] = useState(() => {
        const saved = localStorage.getItem(AUTO_MODE_KEY);
        return saved ? JSON.parse(saved) : false;
    });

    const intervalRef = useRef(null);

    useEffect(() => {
        localStorage.setItem(DARK_MODE_KEY, JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem(FONT_SIZE_KEY, fontSize);
    }, [fontSize]);

    useEffect(() => {
        localStorage.setItem(AUTO_MODE_KEY, JSON.stringify(autoMode));
    }, [autoMode]);

    useEffect(() => {
        if (autoMode) {
            intervalRef.current = setInterval(() => {
                setDarkMode((prev) => !prev);
            }, 5000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [autoMode]);

    useEffect(() => {
        if (autoMode && !intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setDarkMode((prev) => !prev);
            }, 5000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleToggleMode = () => setDarkMode((prev) => !prev);

    const handleFontSize = (delta) => {
        setFontSize((prev) => {
            const next = prev + delta;
            return next < 12 ? 12 : next;
        });
    };

    const handleAutoMode = () => setAutoMode((prev) => !prev);

    return (
        <div
            style={{
                minHeight: "100vh",
                ...(!darkMode ? lightTheme : darkTheme),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.5s, color 0.5s",
            }}
        >
            <h1 style={{ fontSize: `${fontSize}px`, transition: "font-size 0.3s" }}>
                Interfaz React: Modo {darkMode ? "Oscuro" : "Claro"}
            </h1>
            <div style={{ margin: "20px 0" }}>
                <button
                    style={{
                        ...baseButtonStyle,
                        background: darkMode ? "#f5f5f5" : "#222",
                        color: darkMode ? "#222" : "#f5f5f5",
                        border: `2px solid ${darkMode ? "#f5f5f5" : "#222"}`,
                    }}
                    onClick={handleToggleMode}
                    disabled={autoMode}
                >
                    Cambiar a Modo {darkMode ? "Claro" : "Oscuro"}
                </button>
                <button
                    style={{
                        ...baseButtonStyle,
                        background: "#4caf50",
                        color: "#fff",
                        opacity: fontSize <= 12 ? 0.5 : 1,
                    }}
                    onClick={() => handleFontSize(-2)}
                    disabled={fontSize <= 12}
                >
                    - Tamaño
                </button>
                <button
                    style={{
                        ...baseButtonStyle,
                        background: "#2196f3",
                        color: "#fff",
                    }}
                    onClick={() => handleFontSize(2)}
                >
                    + Tamaño
                </button>
                <button
                    style={{
                        ...baseButtonStyle,
                        background: autoMode ? "#ff9800" : "#757575",
                        color: "#fff",
                    }}
                    onClick={handleAutoMode}
                >
                    {autoMode ? "Desactivar" : "Activar"} Modo Automático
                </button>
            </div>
            <p style={{ fontSize: `${fontSize}px`, maxWidth: 500, textAlign: "center", transition: "font-size 0.3s" }}>
                Puedes alternar entre modo claro y oscuro, ajustar el tamaño del texto y activar el modo automático para cambiar el tema cada 5 segundos. Tus preferencias se guardan automáticamente.
            </p>
        </div>
    );
}