import React from 'react';
import './CommentSection.css';

export const CommentSection = () => {
  return (
    <textarea
      type="text"
      id="comment-input"
      name="comment-input"
      className="comment-input"
      placeholder="Agregar un comentario"
    />
  );
};
