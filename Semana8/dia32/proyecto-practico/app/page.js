"use client";
import { useEffect, useState } from "react";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState("");
  const [editId, setEditId] = useState(null);
  const [editNombre, setEditNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  // Cargar items al montar
  useEffect(() => {
    setLoading(true);
    fetch("/api/items")
      .then(res => res.json())
      .then(data => {
        setItems(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setMsg({ type: "error", text: "Error al cargar los items" });
        setLoading(false);
      });
  }, []);

  // Añadir item
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;
    setLoading(true);
    setMsg(null);
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });
    const data = await res.json();
    if (res.ok) {
      setItems([...items, data]);
      setNombre("");
      setMsg({ type: "success", text: "Item añadido correctamente" });
    } else {
      setMsg({ type: "error", text: data.error || "Error al añadir" });
    }
    setLoading(false);
  };

  // Eliminar item
  const handleDelete = async (id) => {
    setLoading(true);
    setMsg(null);
    const res = await fetch(`/api/items/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (res.ok) {
      setItems(items.filter(item => item._id !== id));
      setMsg({ type: "success", text: "Item eliminado" });
    } else {
      setMsg({ type: "error", text: data.error || "Error al eliminar" });
    }
    setLoading(false);
  };

  // Iniciar edición
  const startEdit = (item) => {
    setEditId(item._id);
    setEditNombre(item.nombre);
    setMsg(null);
  };

  // Guardar edición
  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    const res = await fetch(`/api/items/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: editNombre }),
    });
    const data = await res.json();
    if (res.ok) {
      setItems(items.map(item =>
        item._id === editId ? { ...item, nombre: editNombre } : item
      ));
      setEditId(null);
      setEditNombre("");
      setMsg({ type: "success", text: "Item actualizado" });
    } else {
      setMsg({ type: "error", text: data.error || "Error al editar" });
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Lista de Items</h2>
        <p className="text">Agrega, edita o elimina tus items fácilmente.</p>
        {msg && (
          <div
            style={{
              marginBottom: 16,
              padding: "10px 16px",
              borderRadius: 8,
              background: msg.type === "error" ? "#fee2e2" : "#d1fae5",
              color: msg.type === "error" ? "#b91c1c" : "#065f46",
              border: `1px solid ${msg.type === "error" ? "#fca5a5" : "#6ee7b7"}`
            }}
          >
            {msg.text}
          </div>
        )}
        {loading && <div className="text" style={{ marginBottom: 16 }}>Cargando...</div>}
        <form onSubmit={handleAdd} style={{ marginBottom: 24 }}>
          <input
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Nuevo item"
            className="text"
            style={{ padding: 8, borderRadius: 8, border: "1px solid #ccc", marginRight: 8 }}
            disabled={loading}
          />
          <button type="submit" className="button" disabled={loading}>Añadir</button>
        </form>
        <ul>
          {items.map(item =>
            <li key={item._id} style={{ marginBottom: 10 }}>
              {editId === item._id ? (
                <form onSubmit={handleEdit} style={{ display: "inline" }}>
                  <input
                    value={editNombre}
                    onChange={e => setEditNombre(e.target.value)}
                    autoFocus
                    className="text"
                    style={{ padding: 6, borderRadius: 8, border: "1px solid #ccc", marginRight: 8 }}
                    disabled={loading}
                  />
                  <button type="submit" className="button" style={{ marginRight: 6 }} disabled={loading}>Guardar</button>
                  <button type="button" className="button" onClick={() => setEditId(null)} disabled={loading}>Cancelar</button>
                </form>
              ) : (
                <>
                  <span className="text">{item.nombre}</span>
                  <button onClick={() => startEdit(item)} className="button" style={{ marginLeft: 10 }} disabled={loading}>Editar</button>
                  <button onClick={() => handleDelete(item._id)} className="button" style={{ marginLeft: 5, background: "#ef4444" }} disabled={loading}>Eliminar</button>
                </>
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}