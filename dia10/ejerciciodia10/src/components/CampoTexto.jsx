import React, {useState} from "react";

const CampoTexto = () => {
    const [texto, setTexto] = useState("");

    const manejarCambio = (e) => {
        setTexto(e.targer.value);
    };

    return (
        <div>
            <input
            type="text"
            value={texto}
            onChange={manejarCambio}
            placeholder="Escribe Algo"
            />
            <p>Texto ingresado: {texto}</p>
        </div>
    );
};

export default CampoTexto;