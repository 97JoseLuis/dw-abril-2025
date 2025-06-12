import React from "react";

interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
}

interface UsuarioCardProps {
  usuario: Usuario;
}

const UsuarioCard: React.FC <UsuarioCardProps> = ({ usuario }) => {
  const { nombre, edad, activo } = usuario;
  const estilo: React.CSSProperties = {
    backgroundColor: activo ? "lightgreen" : "lightcoral",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200px",
    margin: "10px auto",
  };

  return (
    <div style={estilo}>
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Estado: {activo ? "Activo" : "Inactivo"}</p>
    </div>
  );
};

export default UsuarioCard;
