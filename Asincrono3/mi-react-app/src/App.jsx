import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}`)
      .then(res => res.json())
      .then(data => setMensaje(data.message))
      .catch(error => {
        setMensaje("Error al obtener el mensaje de la API");
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <p>API URL: {import.meta.env.VITE_API_URL}</p>
      <p>Mensaje de la API: {mensaje}</p>
    </div>
  );
}

export default App;