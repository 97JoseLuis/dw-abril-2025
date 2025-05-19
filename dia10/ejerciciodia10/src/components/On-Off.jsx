import React, { useState } from "react";

function AlternarBoton() {
    const [isOn, setIsOn] = useState(false);

    return (
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? "Encendido" : "Apagado"}
        </button>
    );
}

export default AlternarBoton;
