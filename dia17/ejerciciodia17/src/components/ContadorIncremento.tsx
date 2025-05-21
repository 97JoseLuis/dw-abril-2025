import React, { useState, useRef, useEffect } from 'react';

const ContadorIncremento: React.FC = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current += 1;
    });

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <p>Número de renders: {renderCount.current}</p>
        </div>
    );
};

export default ContadorIncremento;