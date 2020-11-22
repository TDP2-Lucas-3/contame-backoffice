import {Container} from 'react-bootstrap';
import React from 'react';
import './Styles.css';
import {Comment} from '../comment/Comment';
import {Row} from 'reactstrap';
import Moment from 'moment';

export const CommentsContainer = (props) => {
  return (
    <Container className="comment-box">
      <Row className="comment-box-title">Comentarios</Row>
      <Row className="comments-box">
        {props.comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              name={comment.user.profile.name}
              secondName={comment.user.profile.surename}
              date={Moment(comment.date).format('DD/MM/YYYY')}
              comment={comment.comment}
              image={comment.user.profile.photo}
              type={comment.category}
            />
          );
        })}
      </Row>
    </Container>
  );
};
