import React, { useState } from 'react';

const ListaInteractiva = () => {
  // Definimos un array inicial de elementos con texto y color
  const initialItems = [
    { id: 1, texto: 'Elemento 1', color: 'black' },
    { id: 2, texto: 'Elemento 2', color: 'black' },
    { id: 3, texto: 'Elemento 3', color: 'black' },
  ];

  // Usamos useState para gestionar la lista de elementos
  const [items, setItems] = useState(initialItems);

  // Función para cambiar el texto y color del elemento clickeado
  const handleClick = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              texto: '¡Clickeado!',
              color: item.color === 'black' ? 'blue' : 'black', // Alterna entre negro y azul
            }
          : item
      )
    );
  };

  return (
    <ul>
      {items.map(item => (
        <li
          key={item.id}
          onClick={() => handleClick(item.id)}
          style={{ color: item.color, cursor: 'pointer', margin: '8px 0' }}
        >
          {item.texto}
        </li>
      ))}
    </ul>
  );
};

export default ListaInteractiva;

