import React from 'react';
import './Styles.css';
import {ProfilePicture} from './profilePicture/ProfilePicture';
import {CommentContent} from './commentContent/CommentContent';

export const Comment = (props) => {
  return (
    <div className="incident-comment-container">
      <div className="picture-column">
        <ProfilePicture image={props.image} />
      </div>
      {props.type === 'PUBLIC' ? (
        <div>
          <CommentContent
            name={props.name}
            secondName={props.secondName}
            date={props.date}
            comment={props.comment}
          />
        </div>
      ) : (
        <div>
          <CommentContent
            name={props.name}
            secondName={props.secondName}
            date={props.date}
            comment={props.comment}
          />
        </div>
      )}
    </div>
  );
};
