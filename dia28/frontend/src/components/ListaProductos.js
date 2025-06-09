import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListaProductos({ onEdit, onShow }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/productos')
      .then(res => setProductos(res.data));
  }, []);

  const eliminar = (id) => {
    axios.delete(`http://localhost:5000/productos/${id}`)
      .then(() => setProductos(productos.filter(p => p._id !== id)));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.map(p => (
        <div key={p._id}>
          <strong>{p.nombre}</strong> - ${p.precio} - Stock: {p.stock}
          <button onClick={() => onShow(p._id)}>Mostrar</button>
          <button onClick={() => onEdit(p)}>Editar</button>
          <button onClick={() => eliminar(p._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default ListaProductos;
