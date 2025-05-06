import React from 'react';
import React, { useState, useEffect } from 'react';

const ArticulosDestacados = ({ articulos }) => {
  const [contadorDestacados, setContadorDestacados] = useState(0);

  useEffect(() => {
    const destacados = articulos.filter((articulo) => articulo.destacado);
    setContadorDestacados(destacados.length);
  }, [articulos]);

  return (
    <div>
      <h2>Artículos Destacados ({contadorDestacados})</h2>
      <ul>
        {articulos
          .filter((articulo) => articulo.destacado)
          .map((articulo) => (
            <li key={articulo.id}>{articulo.titulo}</li>
          ))}
      </ul>
    </div>
  );
};

const App = () => {
  const articulos = [
    { id: 1, titulo: "Boligrafo", destacado: true },
    { id: 2, titulo: "Goma", destacado: false },
    { id: 3, titulo: "Lapiz", destacado: true },
  ];

  return (
    <div>
      <ArticulosDestacados articulos={articulos} />
    </div>
  );
};

export default App;
