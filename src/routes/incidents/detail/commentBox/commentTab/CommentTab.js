import React from 'react';
import './Styles.css';

export const CommentTab = (props) => {
  return props.activeTab === props.value ? (
    <label className="selected-comment-tab">{props.content}</label>
  ) : (
    <label className="comment-tab" onClick={() => props.toggle(props.value)}>
      {props.content}
    </label>
  );
};
