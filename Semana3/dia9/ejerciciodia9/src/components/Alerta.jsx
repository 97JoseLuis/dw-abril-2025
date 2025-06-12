import React from 'react';

const alertaStyle = {
    padding: '16px',
    backgroundColor: '#ffe0b2',
    color: '#663c00',
    border: '1px solid #ffb74d',
    borderRadius: '4px',
    margin: '16px 0',
    fontSize: '16px',
};

const Alerta = ({ children }) => (
    <div style={alertaStyle}>
        {children}
    </div>
);

export default Alerta;