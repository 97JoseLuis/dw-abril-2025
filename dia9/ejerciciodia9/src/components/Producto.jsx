import React from 'react';


function Productos() {
  const productos = [
    { nombre: 'Manzana', precio: 1.2 },
    { nombre: 'Banana', precio: 0.5 },
    { nombre: 'Naranja', precio: 0.8 },
    { nombre: 'Uva', precio: 2.0 },
  ];

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((prod, index) => (
          <Productos key={index} nombre={prod.nombre} precio={prod.precio} />
        ))}
      </ul>
    </div>
  );
}

export default Productos;