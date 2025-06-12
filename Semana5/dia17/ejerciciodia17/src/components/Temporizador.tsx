import { useRef, useState } from "react";

function Temporizador() {
    const [segundos, setSegundos] = useState(0);
    const intervaloRef = useRef<number | null>(null);

    const iniciarTemporizador = () => {
        if (!intervaloRef.current) {
            intervaloRef.current = setInterval(() => {
                setSegundos((s) => s + 1);
            }, 1000);
        }
    };
    const detenerTemporizador = () => {
        if (intervaloRef.current !== null) {
            clearInterval(intervaloRef.current);
            intervaloRef.current = null;
        }
    };

    return (
        <div>
            <p>Tiempo: {segundos} segundos</p>
            <button onClick={iniciarTemporizador}></button>
            <button onClick={detenerTemporizador}></button>
        </div>
    );
}

export default Temporizador;