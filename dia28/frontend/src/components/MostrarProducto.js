import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MostrarProducto({ id }) {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/productos/${id}`)
      .then(res => setProducto(res.data));
  }, [id]);

  if (!producto) return null;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <p>Categoría: {producto.categoria}</p>
    </div>
  );
}

export default MostrarProducto;
