import React from 'react';

const Avatar = ({ url, alt = 'Avatar' }) => (
    <img src={url} alt={alt} style={{ borderRadius: '50%', width: 64, height: 64 }} />
);

export default Avatar;