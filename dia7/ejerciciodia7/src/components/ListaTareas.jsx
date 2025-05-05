function ListaTareas({ tareas }) {
    return (
      <div>
        <h2>Lista de Tareas</h2>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>{tarea.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ListaTareas;