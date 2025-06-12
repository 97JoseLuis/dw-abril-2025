import React from 'react';

const ListaFrutas = ({ frutas }) => {
  return (
    <div>
      <h2>Lista de Frutas</h2>
      <p>Hay {frutas.length} frutas en la lista.</p>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaFrutas;