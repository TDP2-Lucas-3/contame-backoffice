import React from 'react';
import './Styles.css';
import {Row} from 'reactstrap';
import {CommentInfo} from './CommentInfo';
import {CommentBody} from './CommentBody';

export const CommentContent = (props) => {
  return (
    <>
      <Row>
        <CommentInfo
          name={props.name}
          secondName={props.secondName}
          date={props.date}
        />
      </Row>
      <Row>
        <CommentBody comment={props.comment} />
      </Row>
    </>
  );
};
