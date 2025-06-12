import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setNewItem(items[index]);
    setEditIndex(index);
  };

  const saveEdit = () => {
    if (newItem.trim()) {
      const updatedItems = [...items];
      updatedItems[editIndex] = newItem;
      setItems(updatedItems);
      setNewItem("");
      setEditIndex(null);
    }
  };

  return (
    <div className="app">
      <h1>Gestor de Datos</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      {editIndex !== null ? (
        <button onClick={saveEdit}>Guardar</button>
      ) : (
        <button onClick={addItem}>Agregar</button>
      )}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => editItem(index)}>Editar</button>
            <button onClick={() => deleteItem(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;