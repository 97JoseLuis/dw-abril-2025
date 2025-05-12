import React from 'react';

function ListaInteractiva() {
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

  return (
    <ul style={styles.lista}>
      {items.map((item, index) => (
        <li key={index} className="hover-item" style={styles.item}>
          {item}
        </li>
      ))}

      <style>
        {`
          .hover-item {
            transition: transform 0.3s ease, color 0.3s ease;
            cursor: pointer;
            padding: 8px 12px;
            margin: 4px 0;
            list-style: none;
            border-radius: 4px;
          }

          .hover-item:hover {
            transform: scale(1.2);
            color: #ff5733; 
            background-color: #f0f0f0; 
          }
        `}
      </style>
    </ul>
  );
}

const styles = {
  lista: {
    maxWidth: '300px',
    margin: '20px auto',
    padding: '0',
  },
  item: {
    fontSize: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};

export default ListaInteractiva;