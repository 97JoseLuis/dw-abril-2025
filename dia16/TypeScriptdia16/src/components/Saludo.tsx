import React from "react";

interface SaludoProps {
  nombre: string;
}

const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
  return <h1>¡Hola, {nombre}! Bienvenido a mi página WEB.</h1>;
};

export default Saludo;