import React, { useState, useEffect } from "react";

const baseStyles = {
    app: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.5s, color 0.5s",
        padding: "2rem",
    },
    button: {
        margin: "1rem",
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background 0.3s, color 0.3s, transform 0.3s",
    },
};

const themes = {
    light: {
        background: "#f5f5f5",
        color: "#222",
        buttonBg: "#222",
        buttonColor: "#fff",
    },
    dark: {
        background: "#222",
        color: "#f5f5f5",
        buttonBg: "#fff",
        buttonColor: "#222",
    },
};

export default function Aplicacion() {
    const getInitialMode = () =>
        localStorage.getItem("themeMode") === "dark" ? "dark" : "light";
    const getInitialAnimated = () =>
        localStorage.getItem("themeAnimated") === "true";

    const [mode, setMode] = useState(getInitialMode);
    const [animated, setAnimated] = useState(getInitialAnimated);
    const [animateClass, setAnimateClass] = useState(false);

    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);
    useEffect(() => {
        localStorage.setItem("themeAnimated", animated);
    }, [animated]);

    useEffect(() => {
        if (animated) {
            setAnimateClass(true);
            const timeout = setTimeout(() => setAnimateClass(false), 600);
            return () => clearTimeout(timeout);
        }
    }, [mode, animated]);

    const responsiveStyles = `
        @media (max-width: 600px) {
            .app-container {
                padding: 1rem;
            }
            .theme-btn {
                width: 100%;
                font-size: 1.1rem;
            }
        }
        .theme-animate {
            animation: themeChange 0.6s;
        }
        @keyframes themeChange {
            0% { transform: scale(1) rotate(0deg);}
            40% { transform: scale(1.08) rotate(2deg);}
            60% { transform: scale(0.97) rotate(-2deg);}
            100% { transform: scale(1) rotate(0deg);}
        }
    `;

    const currentTheme = themes[mode];

    return (
        <>
            <style>{responsiveStyles}</style>
            <div
                className={`app-container${animateClass ? " theme-animate" : ""}`}
                style={{
                    ...baseStyles.app,
                    background: currentTheme.background,
                    color: currentTheme.color,
                }}
            >
                <h1>Modo {mode === "light" ? "Claro" : "Oscuro"}</h1>
                <p>
                    Tema {animated ? "Animado" : "Estático"}<br />
                    (El cambio de tema se {animated ? "anima" : "aplica instantáneamente"})
                </p>
                <div>
                    <button
                        className="theme-btn"
                        style={{
                            ...baseStyles.button,
                            background: currentTheme.buttonBg,
                            color: currentTheme.buttonColor,
                        }}
                        onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
                    >
                        Cambiar a modo {mode === "light" ? "Oscuro" : "Claro"}
                    </button>
                    <button
                        className="theme-btn"
                        style={{
                            ...baseStyles.button,
                            background: animated ? "#4caf50" : "#888",
                            color: "#fff",
                        }}
                        onClick={() => setAnimated((a) => !a)}
                    >
                        {animated ? "Desactivar" : "Activar"} Tema Animado
                    </button>
                </div>
            </div>
        </>
    );
}