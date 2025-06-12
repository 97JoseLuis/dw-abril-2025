import React, { useState, useEffect } from 'react';

function DetectarTecla() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        setMensaje('¡Presionaste Enter!');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h2>Presiona la tecla "Enter"</h2>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default DetectarTecla;