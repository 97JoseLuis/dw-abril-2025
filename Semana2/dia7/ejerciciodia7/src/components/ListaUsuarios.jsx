import React from 'react';

const ListaUsuarios = ({ usuarios }) => {
  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Pedro' },
  ];

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ListaUsuarios usuarios={usuarios} />
    </div>
  );
};

export default App;
