import React, { useState } from "react";

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
  };

  const handleShipping = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Nombre ingresado: ${nombre}`);
  };

  return (
    <form onSubmit={handleShipping}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
