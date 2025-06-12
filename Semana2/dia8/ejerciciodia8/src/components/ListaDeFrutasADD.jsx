import React, { useState } from 'react';

function ListaDeFrutas() {

  const [frutas, setFrutas] = useState(["Manzana", "Banana", "Cereza", "Durazno", "Fresa"]);

   const [nuevaFruta, setNuevaFruta] = useState("");

     const handleInputChange = (e) => {
    setNuevaFruta(e.target.value);
  };


  const agregarFruta = () => {
    if (nuevaFruta.trim() !== "") {
      setFrutas([...frutas, nuevaFruta.trim()]);
      setNuevaFruta(""); 
    };
}

  return (
    <div>
      <h2>Lista de Frutas</h2>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>

      <input
        type="text"
        value={nuevaFruta}
        onChange={handleInputChange}
        placeholder="Agregar nueva fruta"
      />

      <button onClick={agregarFruta}>Agregar</button>
    </div>
  );
}

export default ListaDeFrutas;