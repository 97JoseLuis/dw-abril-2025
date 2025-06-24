import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="post-card" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px 0',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0, color: '#333' }}>{post.title}</h2>
      
      {post.image && (
        <img 
          src={`data:image/jpeg;base64,${post.image}`} 
          alt={post.title}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '4px',
            marginBottom: '15px'
          }}
        />
      )}
      
      <p style={{ 
        color: '#666', 
        lineHeight: '1.6',
        marginBottom: '15px'
      }}>
        {post.content && post.content.length > 150 
          ? `${post.content.substring(0, 150)}...` 
          : post.content
        }
      </p>
      
      <Link 
        to={`/post/${post._id}`}
        style={{
          display: 'inline-block',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '8px 16px',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '14px'
        }}
      >
        Leer más
      </Link>
    </div>
  );
};

export default PostCard;
