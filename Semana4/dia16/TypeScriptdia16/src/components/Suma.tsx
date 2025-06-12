import React, { useState } from "react";

const Suma: React.FC = () => {
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  const manejarCalculo = () => {
    const resultadoSuma = sumar(25, 30);
    setResultado(resultadoSuma);
  };

  return (
    <div>
      <h2>Calculadora de Suma</h2>
      <button onClick={manejarCalculo}>Calcular 25 + 30</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
};

export default Suma;