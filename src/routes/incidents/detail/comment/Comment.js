import {Col, Row} from 'reactstrap';
import React from 'react';
import './Styles.css';
import {ProfilePicture} from './profilePicture/ProfilePicture';
import {CommentContent} from './commentContent/CommentContent';

export const Comment = (props) => {
  return (
    <Row className="incident-comment-container">
      <Col className="picture-column">
        <ProfilePicture image={props.image} />
      </Col>
      <>
        {props.type === 'PUBLIC' ? (
          <Col className="public-content-column">
            <CommentContent
              name={props.name}
              secondName={props.secondName}
              date={props.date}
              comment={props.comment}
            />
          </Col>
        ) : (
          <Col className="private-content-column">
            <CommentContent
              name={props.name}
              secondName={props.secondName}
              date={props.date}
              comment={props.comment}
            />
          </Col>
        )}
      </>
    </Row>
  );
};
