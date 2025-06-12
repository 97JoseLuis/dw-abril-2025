import React from "react";

const styles = {
    title: {
        color: "#2c3e50",
        fontSize: "2rem",
        marginBottom: "1rem",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#3498db",
        color: "#fff",
        border: "none",
        padding: "0.75rem 1.5rem",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
    },
};

function ObjetoEstilos() {
    return (
        <div>
            <h1 style={styles.title}>Título con Estilos en Objeto</h1>
            <button style={styles.button}>Botón Estilizado</button>
        </div>
    );
}

export default ObjetoEstilos;