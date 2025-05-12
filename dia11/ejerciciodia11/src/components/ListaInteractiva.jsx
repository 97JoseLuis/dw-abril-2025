import React, { useState } from "react";

function ListaInteractiva () {
const elementosIniciales = [
    {id: 1, texto: "Activo", activo: true}
    {id: 2, texto: "Activo", activo: true}
    {id: 3, texto: "Activo", activo: true}
];

const [items, setItems] = useState (elementosIniciales);

const manejarClick = (id) => {
    setItems(prevItems => prevItems.map ( item => item.id === id?
        {
            ...item, 
            activo: !item.activo,
            texto: item.activo ? "Inactivo" : "Activo",

        }
        :item
     ))
}
}

return (
    <ul style={{ listStyle: "none", padding: 0}}>
    {items.map(item => ( 
        <li key={item.id} onClick={() => manejarClick(item.id)}
        style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: item.activo ? "green" : "red",
            color: "white",
            cursor: "pointer",
            width: "100px",
            textAlign: "center"
        }}
        >
            {item.texto}
        </li>
    ))}
     </ul>
  );
