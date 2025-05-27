import { useRef, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { useNavigate } from "react-router-dom";

const NewTask = () => {
  const { addTask } = useContext(TaskContext);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value.trim();
    const description = descriptionRef.current.value.trim();

    if (!title || !description) {
      alert("Todos los campos son requeridos.");
      return;
    }

    addTask(title, description);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    navigate("/");
  };

  return (
    <div>
      <h1>Nueva tarea</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={titleRef} placeholder="Título de la tarea" required />
        <textarea ref={descriptionRef} placeholder="Descripción de la tarea" required />
        <button type="submit">Agregar tarea</button>
      </form>
    </div>
  );
};

export default NewTask;