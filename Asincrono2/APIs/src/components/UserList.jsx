import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';

const UserList = () => {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5', {
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error("Error al obtener usuarios");
        }
        const data = await response.json();
        setUsers(data.results);
      } catch(err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, []);

  if (loading) return <div className="container"><p>Cargando usuarios...</p></div>;
  if (error) return <div className="container"><p>Error: {error}</p></div>;

  return (
    <div className="container">
      <h2>Usuarios (RandomUser API)</h2>
      <div className="card-list">
        {users.map((user, index) => (
          <UserItem key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
