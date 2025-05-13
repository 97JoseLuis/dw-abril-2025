import React, { useEffect, useState } from 'react';

const API = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error al obtener datos:', error));
    }, []);

    return (
        <div>
            <h2>Datos de la API:</h2>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default API;