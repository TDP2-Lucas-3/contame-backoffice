import React from 'react';
import './CommentSection.css';

export const CommentSection = (props) => {
  return (
    <textarea
      type="text"
      id="comment-input"
      name="comment-input"
      className="comment-input"
      placeholder="Agregar un comentario"
      onChange={(e) => props.setCommentText(e.target.value)}
    />
  );
};
