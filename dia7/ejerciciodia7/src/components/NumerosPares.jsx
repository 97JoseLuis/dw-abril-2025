import React from 'react';

const NumerosPares = () => {
    const numerosPares = Array.from({ length: 10 }, (_, index) => (index + 1) * 2);

    return (
        <div>
            <h1>Números Pares</h1>
            <ul>
                {numerosPares.map((numero, index) => (
                    <li key={index}>{numero}</li>
                ))}
            </ul>
        </div>
    );
};

export default NumerosPares;