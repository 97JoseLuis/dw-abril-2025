import React, { useState } from 'react';
import axios from 'axios';

function EditarProducto({ producto, actualizarLista }) {
  const [form, setForm] = useState({ ...producto });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/productos/${producto._id}`, form)
      .then(() => actualizarLista());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Producto</h2>
      <input name="nombre" value={form.nombre} onChange={handleChange} required />
      <input name="descripcion" value={form.descripcion} onChange={handleChange} />
      <input name="precio" type="number" value={form.precio} onChange={handleChange} required />
      <input name="stock" type="number" value={form.stock} onChange={handleChange} required />
      <input name="categoria" value={form.categoria} onChange={handleChange} />
      <button type="submit">Actualizar</button>
    </form>
  );
}

export default EditarProducto;
