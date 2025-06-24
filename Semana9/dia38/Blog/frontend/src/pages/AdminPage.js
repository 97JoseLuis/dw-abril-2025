import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsersAndPosts = async () => {
      const token = localStorage.getItem('token');
      try {
        const userResponse = await axios.get('/api/admin/users', {
          headers: { 'x-auth-token': token }
        });
        setUsers(userResponse.data);

        const postResponse = await axios.get('/api/posts');
        setPosts(postResponse.data.posts);
      } catch (error) {
        console.error('No tienes permisos para acceder a este panel', error);
      }
    };

    fetchUsersAndPosts();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/admin/posts/${id}`, {
        headers: { 'x-auth-token': token }
      });
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error al eliminar la publicación', error);
    }
  };

  return (
    <div>
      <h1>Panel de Administración</h1>
      
      <h2>Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>

      <h2>Publicaciones</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            {post.title} 
            <button onClick={() => handleDeletePost(post._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
