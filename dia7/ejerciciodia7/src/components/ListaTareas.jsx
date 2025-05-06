function tareas({ tareas }) {

  const Tareas = ["tarea 1", "tarea 2", "tarea 3"]

  const tareas = ({ tareas }) => {

    return (
      <div>
        <h2>Lista de Tareas</h2>
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              <strong>{tarea.titulo}</strong> -{" "}
              {tarea.completada ? "Completada" : "Pendiente"}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  }
  
  export default tareas