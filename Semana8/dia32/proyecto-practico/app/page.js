"use client";
import { useEffect, useState } from "react";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState("");
  const [editId, setEditId] = useState(null);
  const [editNombre, setEditNombre] = useState("");

  // Cargar items al montar
  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(setItems);
  }, []);

  // Añadir item
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });
    const nuevo = await res.json();
    setItems([...items, nuevo]);
    setNombre("");
  };

  // Eliminar item
  const handleDelete = async (id) => {
    await fetch(`/api/items/${id}`, {
      method: "DELETE",
    });
    setItems(items.filter(i => i.id !== id));
  };

  // Iniciar edición
  const startEdit = (item) => {
    setEditId(item.id);
    setEditNombre(item.nombre);
  };

  // Guardar edición
  const handleEdit = async (e) => {
    e.preventDefault();
    await fetch(`/api/items/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: editNombre }),
    });
    setItems(items.map(i => i.id === editId ? { ...i, nombre: editNombre } : i));
    setEditId(null);
    setEditNombre("");
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
      <h1>Lista de Items</h1>
      <form onSubmit={handleAdd} style={{ marginBottom: 20 }}>
        <input
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder="Nuevo item"
        />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {items.map(item =>
          <li key={item.id} style={{ marginBottom: 10 }}>
            {editId === item.id ? (
              <form onSubmit={handleEdit} style={{ display: "inline" }}>
                <input
                  value={editNombre}
                  onChange={e => setEditNombre(e.target.value)}
                  autoFocus
                />
                <button type="submit">Guardar</button>
                <button type="button" onClick={() => setEditId(null)}>Cancelar</button>
              </form>
            ) : (
              <>
                <span>{item.nombre}</span>
                <button onClick={() => startEdit(item)} style={{ marginLeft: 10 }}>Editar</button>
                <button onClick={() => handleDelete(item.id)} style={{ marginLeft: 5 }}>Eliminar</button>
              </>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}