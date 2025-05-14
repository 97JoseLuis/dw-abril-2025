import React, { useState, useEffect } from "react";

const getStyles = (isDark, isAnimated, animate) => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: isAnimated
        ? "background-color 0.7s, color 0.7s, transform 0.7s"
        : "none",
    backgroundColor: isDark ? "#181818" : "#f5f5f5",
    color: isDark ? "#f5f5f5" : "#181818",
    ...(animate && isAnimated
        ? { transform: "scale(1.03)" }
        : { transform: "scale(1)" }),
    width: "100vw",
    boxSizing: "border-box",
});

const responsiveStyle = `
@media (max-width: 600px) {
    .theme-container {
        padding: 1rem;
        font-size: 1.1rem;
    }
    .theme-btn {
        width: 100%;
        margin-bottom: 0.7rem;
    }
}
`;

const STORAGE_KEY = "theme-app-settings";

function getInitialSettings() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (saved && typeof saved === "object") {
            return {
                isDark: !!saved.isDark,
                isAnimated: !!saved.isAnimated,
            };
        }
    } catch {}
    return { isDark: false, isAnimated: false };
}

const App = () => {
    const [{ isDark, isAnimated }, setSettings] = useState(getInitialSettings());
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ isDark, isAnimated })
        );
    }, [isDark, isAnimated]);

    useEffect(() => {
        if (isAnimated) {
            setAnimate(true);
            const timeout = setTimeout(() => setAnimate(false), 700);
            return () => clearTimeout(timeout);
        }
    }, [isDark, isAnimated]);

    const toggleMode = () =>
        setSettings((s) => ({ ...s, isDark: !s.isDark }));

    const toggleAnimated = () =>
        setSettings((s) => ({ ...s, isAnimated: !s.isAnimated }));

    return (
        <div
            className="theme-container"
            style={getStyles(isDark, isAnimated, animate)}
        >
            <style>{responsiveStyle}</style>
            <h1>
                {isDark ? "Modo Oscuro" : "Modo Claro"}
                {isAnimated ? " (Animado)" : " (Estático)"}
            </h1>
            <p>
                Usa los botones para alternar entre modo claro/oscuro y tema animado/estático.
            </p>
            <button className="theme-btn" onClick={toggleMode} style={{
                margin: "0.5rem",
                padding: "0.7rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                background: isDark ? "#333" : "#ddd",
                color: isDark ? "#fff" : "#222",
                transition: "background 0.3s, color 0.3s"
            }}>
                Cambiar a {isDark ? "Claro" : "Oscuro"}
            </button>
            <button className="theme-btn" onClick={toggleAnimated} style={{
                margin: "0.5rem",
                padding: "0.7rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                background: isAnimated ? "#6c63ff" : "#aaa",
                color: "#fff",
                transition: "background 0.3s"
            }}>
                Tema {isAnimated ? "Estático" : "Animado"}
            </button>
            <footer style={{ marginTop: "2rem", opacity: 0.7, fontSize: "0.9rem" }}>
                © {new Date().getFullYear()} - React Tema Desafío
            </footer>
        </div>
    );
};

export default App;