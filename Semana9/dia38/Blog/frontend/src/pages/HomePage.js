import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`/api/posts?page=${currentPage}`);
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Error al cargar las publicaciones. Verifica que el backend esté corriendo.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Cargando publicaciones...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Publicaciones</h1>
      
      {error && (
        <div style={{ 
          backgroundColor: '#f8d7da', 
          color: '#721c24', 
          padding: '10px', 
          borderRadius: '5px', 
          marginBottom: '20px' 
        }}>
          {error}
        </div>
      )}

      {Array.isArray(posts) && posts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h3>No hay publicaciones disponibles</h3>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {Array.isArray(posts) && posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>Página {currentPage} de {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
