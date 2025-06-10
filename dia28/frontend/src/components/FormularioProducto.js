import React, { useState, useEffect } from 'react';

function FormularioProducto({ onSubmit, productoEdit, setModoEdicion }) {
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: '',
  });

  useEffect(() => {
    if (productoEdit) {
      setProducto(productoEdit);
    }
  }, [productoEdit]);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!producto.nombre || !producto.precio) {
      alert("El nombre y el precio son obligatorios.");
      return;
    }

    const payload = {
      producto,
      precio: parseFloat(producto.precio),
      stock: parseInt(producto.stock),
    };

    onSubmit(productoEdit ? producto._id : null, payload);
    setProducto({ nombre: '', descripcion: '', precio: '', stock: '', categoria: '' });
    setModoEdicion(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{productoEdit ? "Editar Producto" : "Nuevo Producto"}</h2>
      <input name="nombre" placeholder="Nombre" value={producto.nombre} onChange={handleChange} />
      <input name="descripcion" placeholder="Descripción" value={producto.descripcion} onChange={handleChange} />
      <input name="precio" placeholder="Precio" type="number" value={producto.precio} onChange={handleChange} />
      <input name="stock" placeholder="Stock" type="number" value={producto.stock} onChange={handleChange} />
      <input name="categoria" placeholder="Categoría" value={producto.categoria} onChange={handleChange} />
      <button type="submit">{productoEdit ? "Actualizar" : "Agregar"}</button>
      {productoEdit && <button onClick={() => { setModoEdicion(false); setProducto({ nombre: '', descripcion: '', precio: '', stock: '', categoria: '' }); }}>Cancelar</button>}
    </form>
  );
}

export default FormularioProducto;
