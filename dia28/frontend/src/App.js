import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioProducto from './components/FormularioProducto';
import ListaProductos from './components/ListaProductos';
import ObtenerProductos from './components/ObtenerProducto';
const API_URL = 'http://localhost:5000/productos';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  const obtenerProductos = async () => {
    const res = await axios.get(API_URL);
    setProductos(res.data);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const agregarProducto = async (producto) => {
    await axios.post(API_URL, producto);
    obtenerProductos();
  };

  const actualizarProducto = async (id, producto) => {
    await axios.put(`${API_URL}/${id}`, producto);
    setModoEdicion(false);
    setProductoSeleccionado(null);
    obtenerProductos();
  };

  const eliminarProducto = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    obtenerProductos();
  };

  const mostrarProducto = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    setProductoSeleccionado(res.data);
  };

  return (
    <div className="container">
      <h1>Catálogo de Productos</h1>
      <FormularioProducto
        onSubmit={modoEdicion ? actualizarProducto : agregarProducto}
        productoEdit={modoEdicion ? productoSeleccionado : null}
        setModoEdicion={setModoEdicion}
      />
      <ListaProductos
        productos={productos}
        onEliminar={eliminarProducto}
        onEditar={(p) => {
          setProductoSeleccionado(p);
          setModoEdicion(true);
        }}
        onMostrar={mostrarProducto}
      />
      {productoSeleccionado && !modoEdicion && (
        <ObtenerProductos producto={productoSeleccionado} />
      )}
    </div>
  );
}

export default App;
