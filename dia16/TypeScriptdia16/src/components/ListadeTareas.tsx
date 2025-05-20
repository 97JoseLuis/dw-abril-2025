import React, { useState } from "react";

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

const ListadeTareas: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>([
    { id: 1, texto: "Aprender React", completada: false },
    { id: 2, texto: "Practicar TypeScript", completada: true },
    { id: 3, texto: "Construir una app increíble", completada: false },
  ]);

  const toggleCompletada = (id: number) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
              {tarea.texto}
            </span>
            <button onClick={() => toggleCompletada(tarea.id)}>
              {tarea.completada ? "Desmarcar" : "Completar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadeTareas;
