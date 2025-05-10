import React from 'react';

function Perfil({ nombre, edad }) {
  return (
    <div>
      <h2>Perfil</h2>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}

export default Perfil;