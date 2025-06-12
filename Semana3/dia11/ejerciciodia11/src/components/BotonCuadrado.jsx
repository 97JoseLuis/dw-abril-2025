import { useState } from 'react';

function BotonCuadrado() {
  const [encendido, setEncendido] = useState(true);

  const handleClick = () => {
    setEncendido(true); 
  };

  const handleDoubleClick = () => {
    setEncendido(false); 
  };

  const styles = {
    width: '100px',
    height: '100px',
    backgroundColor: encendido ? 'green' : 'red',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div
      style={styles}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {encendido ? 'Encendido' : 'Apagado'}
    </div>
  );
}

export default BotonCuadrado;