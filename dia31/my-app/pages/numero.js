import { useEffect, useState } from "react";

export default function Numero() {
  const [numero, setNumero] = useState(null);

  useEffect(() => {
    fetch("/api/numero")
      .then((res) => res.json())
      .then((data) => setNumero(data.numero));
  }, []);

  return (
    <div>
      <h1>Número aleatorio desde la API:</h1>
      <p>{numero !== null ? numero : "Cargando..."}</p>
    </div>
  );
}