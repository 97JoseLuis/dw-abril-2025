import { useRef, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-family: Arial, sans-serif;
  padding: 0.75rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
  font-family: Arial, sans-serif;
`;

const Button = styled.button`
  font-family: Arial, sans-serif;
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #2563eb;
  }
`;

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
    <Container>
      <Title>Nueva tarea</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" ref={titleRef} placeholder="Título de la tarea" required />
        <TextArea ref={descriptionRef} placeholder="Descripción de la tarea" required />
        <Button type="submit">Agregar tarea</Button>
      </Form>
    </Container>
  );
};

export default NewTask;
