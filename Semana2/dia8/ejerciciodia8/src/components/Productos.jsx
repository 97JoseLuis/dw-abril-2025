import React from 'react';
import Producto from './Producto';

const listaProductos = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Celular", precio: 800 },
  { id: 3, nombre: "Tablet", precio: 500 }
];

const App = () => {
  const productosFiltrados = listaProductos.filter(producto => producto.precio > 700);

  return (
    <div>
      <h2>Productos con precio mayor a $700</h2>
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((producto) => (
          <Producto 
            key={producto.id} 
            nombre={producto.nombre} 
            precio={producto.precio} 
          />
        ))
      ) : (
        <p>No hay productos que cumplan con el criterio.</p>
      )}
    </div>
  );
};

export default App;