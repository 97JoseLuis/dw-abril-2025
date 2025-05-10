import React, { useState, useEffect } from 'react';

function CambioColorFondo() {
  const [color, setColor] = useState('#ffffff');
  useEffect(() => {
    const colores = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33'];
    const intervalo = setInterval(() => {
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      setColor(colorAleatorio);
    }, 3000); 

    return () => clearInterval(intervalo);
  }, []);

  document.body.style.backgroundColor = color;

  return (
    <div>
      <h1>El color de fondo cambia cada 3 segundos</h1>
    </div>
  );
}

export default CambioColorFondo;