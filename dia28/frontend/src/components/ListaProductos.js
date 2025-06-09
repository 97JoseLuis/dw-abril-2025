import React from 'react';

function ListaProductos({ productos, onEliminar, onEditar, onMostrar }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto._id}>
            <strong>{producto.nombre}</strong> - ${producto.precio} - Stock: {producto.stock}
            <button onClick={() => onMostrar(producto._id)}>Mostrar</button>
            <button onClick={() => onEditar(producto)}>Editar</button>
            <button onClick={() => onEliminar(producto._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
