import React from "react";

function ListaFrutas ({frutas}) {
        const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa"];

    const frutas = () => (
        <ul>
            {frutas.map((frutas, index) => (
                <li key = {index}>{frutas}</li>
            ))}

        </ul>
    )
}

export default ListaFrutas;