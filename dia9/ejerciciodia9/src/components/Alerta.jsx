import React from 'react';

const alertaStyle = {
    padding: '16px',
    backgroundColor: '#fdecea',
    color: '#611a15',
    border: '1px solid #f5c6cb',
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