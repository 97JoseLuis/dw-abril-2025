import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await axios.get(`/api/posts/${id}`);
      setPost(response.data);
      const commentsResponse = await axios.get(`/api/comments/${id}`);
      setComments(commentsResponse.data);
    };

    fetchPostData();
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={`data:image/jpeg;base64,${post.image}`} alt={post.title} />
      <p>{post.content}</p>
      <h2>Comentarios:</h2>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default PostDetail;
