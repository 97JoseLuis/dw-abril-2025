import React from 'react';

function Botón({ texto, onClick }) {
    return (
        <button onClick={onClick}>
            {texto}
        </button>
    );
}

export default Botón;