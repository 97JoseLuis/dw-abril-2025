import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import styled from "styled-components";

// Contenedor principal centrado y con padding
const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

// Título principal
const Title = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

// Descripción de la tarea
const Description = styled.p`
  font-size: 35px;
  font-family: Arial, sans-serif;
  margin-bottom: 1rem;
`;

// Estado de la tarea, con color dinámico según si está completada o no
const Status = styled.p`
  font-family: Arial, sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => (props.completed ? "#28a745" : "#dc3545")};
`;

const TaskDetail = () => {
  const { id } = useParams();
  const { tasks } = useContext(TaskContext);

  const task = tasks.find((task) => task.id.toString() === id);

  if (!task) {
    return (
      <Container>
        <h2>Tarea no encontrada</h2>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <Status completed={task.completed}>
        Estado: {task.completed ? "Completada ✅" : "Pendiente ⏳"}
      </Status>
    </Container>
  );
};

export default TaskDetail;
