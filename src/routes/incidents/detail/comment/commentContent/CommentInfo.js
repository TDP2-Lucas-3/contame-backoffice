import React from 'react';
import './Styles.css';

export const CommentInfo = (props) => {
  return (
    <div className="comment-info-container">
      <label className="comment-owner-info">{`${props.name} ${props.secondName}`}</label>
      <label className="comment-date">{props.date}</label>
    </div>
  );
};
