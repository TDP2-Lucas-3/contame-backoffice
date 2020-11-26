import React from 'react';
import './Styles.css';

export const CommentTab = (props) => {
  return (
    <label className="comment-tab" onClick={() => props.toggle(props.value)}>
      {props.content}
    </label>
  );
};
