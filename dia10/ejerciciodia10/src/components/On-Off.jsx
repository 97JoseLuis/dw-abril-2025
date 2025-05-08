import React, { useState } from "react";

const BotonEncendidoApagado = () => {
    const [estado, setEstado] = useState (false);

    const alternarEstado = () => {
        setEstado (!estado);
    }

return (
    <div>
        <button onClick={(alternarEstado)}>
            (estado ? "Apagar" : "Encender")
        </button>
        <p>Estado :(estado ? "Encendido" : "Apagado")</p>
    </div>
);

}

export default BotonEncendidoApagado;