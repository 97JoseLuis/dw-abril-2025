import React, { useState } from "react";

const Contador: React.FC = () => {
  const [contador, setContador] = useState<number>(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default Contador;
