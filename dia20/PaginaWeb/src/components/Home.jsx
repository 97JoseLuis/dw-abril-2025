import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../Context/TaskContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { tasks, removeTask, toggleTaskCompletion } = useContext(TaskContext);
  const [localTasks, setLocalTasks] = useState(tasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter === "completed") {
      setLocalTasks(tasks.filter((task) => task.completed));
    } else if (filter === "pending") {
      setLocalTasks(tasks.filter((task) => !task.completed));
    } else {
      setLocalTasks(tasks);
    }
  }, [tasks, filter]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Lista de Tareas</h1>
      <Link to="/new-task" className="text-blue-500">Crear nueva tarea</Link>

      <div className="mt-4">
        <button onClick={() => setFilter("all")} className="mr-2 px-4 py-2 bg-gray-300">Todas</button>
        <button onClick={() => setFilter("completed")} className="mr-2 px-4 py-2 bg-green-400">Completadas</button>
        <button onClick={() => setFilter("pending")} className="px-4 py-2 bg-red-400">Pendientes</button>
      </div>
      <ul className="mt-4">
        {localTasks.map((task) => (
          <li key={task.id} className="p-2 border-b flex justify-between">
            <Link to={`/task/${task.id}`} className="text-lg">{task.title}</Link>
            <div>
              <button onClick={() => toggleTaskCompletion(task.id)} className="mr-2 px-2 py-1 bg-yellow-400">
                {task.completed ? "Desmarcar" : "Completar"}
              </button>
              <button onClick={() => removeTask(task.id)} className="px-2 py-1 bg-red-500 text-white">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;