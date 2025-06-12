import React, { useState } from 'react';

const listaNombres = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Carlos" },
  { id: 4, nombre: "Marta" }
];

const App = () => {
  const [filtro, setFiltro] = useState('');

  
  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

   const nombresFiltrados = listaNombres.filter((item) =>
    item.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h2>Filtrar Nombres</h2>
      <input
        type="text"
        placeholder="Escribe para filtrar..."
        value={filtro}
        onChange={handleChange}
      />

      <ul>
        {nombresFiltrados.map((item) => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;