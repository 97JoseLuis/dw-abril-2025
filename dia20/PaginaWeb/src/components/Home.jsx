import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../Context/TaskContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Contenedor principal
const Container = styled.div`
  padding: 25px;
    
`;

// Título de la página
const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  font-family: Arial, sans-serif;
`;

// Enlace para crear una nueva tarea
const NewTaskLink = styled(Link)`
  font-family: Arial, sans-serif;
  color: #3b82f6;
  font-size: 25px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// Contenedor para los botones de filtro
const FilterContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

// Botón de filtro con estilos dinámicos según la variante
const FilterButton = styled.button`
  font-size: 16px;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${(props) => {
    if (props.variant === "all") return "#d1d5db";
    if (props.variant === "completed") return "#4ade80";
    if (props.variant === "pending") return "#f87171";
    return "#d1d5db";
  }};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// Lista de tareas
const TaskList = styled.ul`
  margin-top: 1rem;
`;

// Cada elemento de tarea
const TaskItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb; /* Gray claro */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

// Enlace que muestra el título de la tarea
const TaskLink = styled(Link)`
  font-size: 20px; 
  font-family: Arial, sans-serif;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

// Botones de acción: alternar completitud y eliminar
const ActionButton = styled.button`
  font-family: Arial, sans-serif;
  font-size: 20px;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: ${(props) =>
    props.variant === "toggle" ? "#facc15" : props.variant === "delete" ? "#ef4444" : "#facc15"};
  color: ${(props) => (props.variant === "delete" ? "#fff" : "#000")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

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
    <Container>
      <Title>Lista de Tareas</Title>
      <NewTaskLink to="/new-task">Crear nueva tarea</NewTaskLink>

      <FilterContainer>
        <FilterButton onClick={() => setFilter("all")} variant="all">
          Todas
        </FilterButton>
        <FilterButton onClick={() => setFilter("completed")} variant="completed">
          Completadas
        </FilterButton>
        <FilterButton onClick={() => setFilter("pending")} variant="pending">
          Pendientes
        </FilterButton>
      </FilterContainer>

      <TaskList>
        {localTasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskLink to={`/task/${task.id}`}>{task.title}</TaskLink>
            <div>
              <ActionButton onClick={() => toggleTaskCompletion(task.id)} variant="toggle">
                {task.completed ? "Desmarcar" : "Completar"}
              </ActionButton>
              <ActionButton onClick={() => removeTask(task.id)} variant="delete">
                Eliminar
              </ActionButton>
            </div>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default Home;
