import { useEffect, useState } from "react";

export default function CrudNombres() {
  const [nombres, setNombres] = useState([]);
  const [nombre, setNombre] = useState("");
  const [cargando, setCargando] = useState(true);

  // Obtener la lista al cargar
  useEffect(() => {
    fetchNombres();
  }, []);

  const fetchNombres = async () => {
    setCargando(true);
    const res = await fetch("/api/nombres");
    const data = await res.json();
    setNombres(data.nombres);
    setCargando(false);
  };

  // Añadir nombre
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;
    await fetch("/api/nombres", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });
    setNombre("");
    fetchNombres();
  };

  // Eliminar nombre por id
  const handleEliminar = async (id) => {
    await fetch("/api/nombres", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchNombres();
  };

  return (
    <div>
      <h1>CRUD de Nombres</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nuevo nombre"
          required
        />
        <button type="submit">Agregar</button>
      </form>
      <h2>Lista de nombres</h2>
      {cargando ? (
        <p>Cargando...</p>
      ) : nombres.length === 0 ? (
        <p>No hay nombres.</p>
      ) : (
        <ul>
          {nombres.map((n) => (
            <li key={n.id}>
              {n.nombre}{" "}
              <button onClick={() => handleEliminar(n.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}