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
    setItems(items.filter(item => item.id !== id));
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
    setItems(items.map(item =>
      item.id === editId ? { ...item, nombre: editNombre } : item
    ));
    setEditId(null);
    setEditNombre("");
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Lista de Items</h2>
        <p className="text">Agrega, edita o elimina tus items fácilmente.</p>
        <form onSubmit={handleAdd} style={{ marginBottom: 24 }}>
          <input
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Nuevo item"
            className="text"
            style={{ padding: 8, borderRadius: 8, border: "1px solid #ccc", marginRight: 8 }}
          />
          <button type="submit" className="button">Añadir</button>
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
                    className="text"
                    style={{ padding: 6, borderRadius: 8, border: "1px solid #ccc", marginRight: 8 }}
                  />
                  <button type="submit" className="button" style={{ marginRight: 6 }}>Guardar</button>
                  <button type="button" className="button" onClick={() => setEditId(null)}>Cancelar</button>
                </form>
              ) : (
                <>
                  <span className="text">{item.nombre}</span>
                  <button onClick={() => startEdit(item)} className="button" style={{ marginLeft: 10 }}>Editar</button>
                  <button onClick={() => handleDelete(item.id)} className="button" style={{ marginLeft: 5, background: "#ef4444" }}>Eliminar</button>
                </>
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}