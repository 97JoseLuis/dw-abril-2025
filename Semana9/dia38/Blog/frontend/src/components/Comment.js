import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.content}</p>
      <small>Publicado por {comment.author.username}</small>
    </div>
  );
};

export default Comment;
