import React, { useState } from "react";

function EstilosDinamicos() {
    const [esRojo, setEsRojo] = useState(true);

    const cambiarColor = () => {
        setEsRojo((prev) => !prev);
    };

    const estiloBoton = {
        backgroundColor: esRojo ? "red" : "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    };

    return (
        <button style={estiloBoton} onClick={cambiarColor}>
            Cambiar color
        </button>
    );
}

export default EstilosDinamicos;