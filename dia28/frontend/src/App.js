import React, { useState } from 'react';
import ListaProductos from './components/ListaProductos';
import FormularioProducto from './components/FormularioProducto';
import EditarProducto from './components/EditarProducto';
import MostrarProducto from './components/MostrarProducto';

function App() {
  const [productoActual, setProductoActual] = useState(null);
  const [mostrarId, setMostrarId] = useState(null);
  const [actualizar, setActualizar] = useState(false);

  const recargarLista = () => {
    setActualizar(!actualizar);
    setProductoActual(null);
    setMostrarId(null);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Catálogo de Productos</h1>

      <FormularioProducto actualizarLista={recargarLista} />

      <ListaProductos
        key={actualizar} // clave para forzar la recarga
        onEdit={setProductoActual}
        onShow={setMostrarId}
      />

      {productoActual && (
        <EditarProducto
          producto={productoActual}
          actualizarLista={recargarLista}
        />
      )}

      {mostrarId && <MostrarProducto id={mostrarId} />}
    </div>
  );
}

export default App;
