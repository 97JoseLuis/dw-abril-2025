import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState('');

  useEffect(() => {
    const fetchPostData = async () => {
      const postResponse = await axios.get(`/api/posts/${id}`);
      setPost(postResponse.data);

      const commentsResponse = await axios.get(`/api/comments/${id}`);
      setComments(commentsResponse.data);
    };

    fetchPostData();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        '/api/comments',
        { postId: id, content: commentContent },
        { headers: { 'x-auth-token': token } }
      );
      setComments([...comments, response.data]);
      setCommentContent('');
    } catch (error) {
      console.error('Error al agregar comentario', error);
    }
  };

  if (!post) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={`data:image/jpeg;base64,${post.image}`} alt={post.title} />
      <p>{post.content}</p>

      <div>
        <h3>Comentarios</h3>
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>

      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Escribe tu comentario"
        />
        <button type="submit">Comentar</button>
      </form>
    </div>
  );
};

export default PostPage;
