import React from 'react';

function TablaUsuarios() {
  const usuarios = [
    { id: 1, nombre: "Carlos", edad: 30, ciudad: "Madrid" },
    { id: 2, nombre: "Ana", edad: 25, ciudad: "Barcelona" },
    { id: 3, nombre: "Luis", edad: 35, ciudad: "Valencia" },
    { id: 4, nombre: "Marta", edad: 28, ciudad: "Sevilla" }
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => (
          <tr key={usuario.id}>
            <td>{usuario.nombre}</td>
            <td>{usuario.edad}</td>
            <td>{usuario.ciudad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaUsuarios;