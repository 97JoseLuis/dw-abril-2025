import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

const TaskDetail = () => {
  const { id } = useParams();
  const { tasks } = useContext(TaskContext);

  const task = tasks.find((task) => task.id.toString() === id);

  if (!task) {
    return <h2>Tarea no encontrada</h2>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Estado: {task.completed ? "Completada ✅" : "Pendiente ⏳"}</p>
    </div>
  );
};

export default TaskDetail;