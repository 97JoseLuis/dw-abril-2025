import React from 'react';

const Tarjeta = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            background: '#fff',
            margin: '8px 0'
        }}>
            {children}
        </div>
    );
};

export default Tarjeta;