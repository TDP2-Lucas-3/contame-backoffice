import React from 'react';
import './Styles.css';

export const CommentBody = (props) => {
  return <text className="comment-body"> {props.comment} </text>;
};
