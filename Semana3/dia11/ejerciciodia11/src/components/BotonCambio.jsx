import { useState } from 'react';

function BotonCambio() {
  const [encendido, setEncendido] = useState(true);

  const handleClick = () => {
    setEncendido(prev => !prev);
  };

  const styles = {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: encendido ? 'green' : 'red',
  };

  return (
    <button style={styles} onClick={handleClick}>
      {encendido ? 'Encendido' : 'Apagado'}
    </button>
  );
}

export default BotonCambio;