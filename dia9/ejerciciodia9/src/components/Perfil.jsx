import React from 'react';

function Perfil({ nombre, edad }) {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}

export default Perfil;