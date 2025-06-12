import { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [exito, setExito] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setExito(false);

    const res = await fetch("/api/nombres", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    if (res.ok) {
      setExito(true);
      setNombre("");
    }
  };

  return (
    <div>
      <h1>Enviar nombre</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {exito && <p>¡Nombre enviado correctamente!</p>}
    </div>
  );
}