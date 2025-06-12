import React, { useState } from 'react';

const tareasIniciales = [
  { id: 1, texto: "Hacer ejercicio" },
  { id: 2, texto: "Leer un libro" },
  { id: 3, texto: "Aprender React" }
];

const App = () => {
  const [tareas, setTareas] = useState(tareasIniciales);

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.texto}
            <button onClick={() => eliminarTarea(tarea.id)} style={{ marginLeft: '10px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;