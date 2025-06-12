import React, { useState, useRef, useEffect } from 'react';

const ValorPrevio: React.FC = () => {
    const [contador, setContador] = useState(0);
    const valorPrevio = useRef<number>(0);

    useEffect(() => {
        valorPrevio.current = contador;
    }, [contador]);

    const incrementar = () => {
        setContador((prev) => prev + 1);
    };

    return (
        <div>
            <p>Contador actual: {contador}</p>
            <p>Valor previo: {valorPrevio.current}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
};

export default ValorPrevio;