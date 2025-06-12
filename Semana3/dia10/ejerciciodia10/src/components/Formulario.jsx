import React, { useState } from 'react';

function Formulario() {
  const [valor, setValor] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setValor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje(`Has ingresado: ${valor}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={valor}
          onChange={handleChange}
          placeholder="Ingresa algo..."
        />
        <button type="submit">Mostrar valor</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Formulario;