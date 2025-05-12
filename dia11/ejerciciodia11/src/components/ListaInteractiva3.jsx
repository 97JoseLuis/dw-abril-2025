import React, { useState } from 'react';

function ListaInteractiva3() {
    const [items, setItems] = useState([]);

    const agregarItem = () => {
        setItems([...items, `Elemento ${items.length + 1}`]);
    };

    return (
        <div>
            <button onClick={agregarItem}>Agregar elemento</button>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaInteractiva3;