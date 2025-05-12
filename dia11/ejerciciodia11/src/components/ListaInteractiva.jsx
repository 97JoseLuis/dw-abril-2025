import React, { useState } from "react";

const initialItems = [
    { id: 1, text: "Elemento 1", altText: "¡Clickeado 1!", color: "black", altColor: "red" },
    { id: 2, text: "Elemento 2", altText: "¡Clickeado 2!", color: "black", altColor: "blue" },
    { id: 3, text: "Elemento 3", altText: "¡Clickeado 3!", color: "black", altColor: "green" },
];

function ListaInteractiva() {
    const [items, setItems] = useState(
        initialItems.map(item => ({ ...item, toggled: false }))
    );

    const handleClick = (id) => {
        setItems(items =>
            items.map(item =>
                item.id === id ? { ...item, toggled: !item.toggled } : item
            )
        );
    };

    return (
        <ul>
            {items.map(item => (
                <li
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    style={{
                        cursor: "pointer",
                        color: item.toggled ? item.altColor : item.color,
                        userSelect: "none"
                    }}
                >
                    {item.toggled ? item.altText : item.text}
                </li>
            ))}
        </ul>
    );
}

export default ListaInteractiva;