import React from 'react';

const baseButtonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    background: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
};

const dangerButtonStyle = {
    ...baseButtonStyle,
    background: '#dc3545',
};

const successButtonStyle = {
    ...baseButtonStyle,
    background: '#28a745',
};

export { baseButtonStyle, dangerButtonStyle, successButtonStyle };