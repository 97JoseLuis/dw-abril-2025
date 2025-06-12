import { useEffect, useState } from "react";

export default function Saludo() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("/api/saludo")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje));
  }, []);

  return (
    <div>
      <h1>Mensaje desde la API:</h1>
      <p>{mensaje}</p>
    </div>
  );
}