import React, { useState } from "react";

const ListaElementos = () => {
 const [elementos, setElementos] = useState([]);
 const [nuevoElemento, setNuevoElemento] = useState("");

 const agregarElemento = () => {
    if (nuevoElemento.trim() !==""){
        setElementos([...elementos, nuevoElemento]);
        setNuevoElemento("");
    }
 }

 return (
    <div>
        <h2>Lista Elementos</h2>
        <input
        type= "text"
        value={nuevoElemento}
        onChange={(e) => 
            setNuevoElemento(e.target.value)}
            placeholder="Ingrese un Elemento"
        />
        <button onClick={agregarElemento}>Agregar</button>
        <ul>
            {elementos.map((elementos, index) => (
                <li key={index}>{elementos}</li>
            ))}
        </ul>
    </div>
 )

}

export default ListaElementos;