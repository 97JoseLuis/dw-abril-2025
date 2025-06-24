import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result.split(',')[1]); // Solo la parte base64 de la imagen
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        '/api/posts',
        { title, content, image },
        { headers: { 'x-auth-token': token } }
      );
    navigate('/home');
    } catch (error) {
      console.error('Error al crear la publicación', error);
    }
  };

  return (
    <div>
      <h2>Crear Publicación</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la publicación"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenido de la publicación"
          required
        />
        <input type="file" onChange={handleImageChange} required />
        <button type="submit">Crear Publicación</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
