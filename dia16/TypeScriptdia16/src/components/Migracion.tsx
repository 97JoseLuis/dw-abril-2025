import { useState } from 'react';

const BotonCambio: React.FC = () => {
  const [encendido, setEncendido] = useState<boolean>(true);

  const handleClick = (): void => {
    setEncendido(prev => !prev);
  };

  const styles: React.CSSProperties = {
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
};

export default BotonCambio;
