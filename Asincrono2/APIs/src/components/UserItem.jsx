import React from 'react';

const UserItem = ({ name, email, picture, login }) => {
  return (
    <div className="card">
      <img src={picture.thumbnail} alt={`${name.first} ${name.last}`} className="card-img" />
      <div className="card-body">
        <h3>{name.first} {name.last}</h3>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Usuario:</strong> {login.username}</p>
      </div>
    </div>
  );
};

export default UserItem;
