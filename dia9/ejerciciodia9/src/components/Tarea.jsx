import React from 'react';

const Tarea = ({ texto, completada }) => {
    const estilo = {
        textDecoration: completada ? 'line-through' : 'none',
        color: completada ? 'gray' : 'black',
    };

    return (
        <p style={estilo}>
            {texto}
        </p>
    );
};

export default Tarea;