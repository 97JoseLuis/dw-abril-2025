import React, { useState } from 'react';
import axios from 'axios';

function FormularioProducto({ actualizarLista }) {
  const [form, setForm] = useState({
    nombre: '', descripcion: '', precio: '', stock: '', categoria: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/productos', {
      ...form,
      precio: Number(form.precio),
      stock: Number(form.stock)
    }).then(() => {
      setForm({ nombre: '', descripcion: '', precio: '', stock: '', categoria: '' });
      actualizarLista();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
      <input name="precio" type="number" placeholder="Precio" value={form.precio} onChange={handleChange} required />
      <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required />
      <input name="categoria" placeholder="Categoría" value={form.categoria} onChange={handleChange} />
      <button type="submit">Crear</button>
    </form>
  );
}

export default FormularioProducto;
