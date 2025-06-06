import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("es");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "es" ? "en" : "es"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

export const LanguageToggleButton = () => {
    const { language, toggleLanguage } = useLanguage();
    return (
        <button onClick={toggleLanguage}>
            {language === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
        </button>
    );
};