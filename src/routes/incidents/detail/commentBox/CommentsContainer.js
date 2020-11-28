import {Container} from 'react-bootstrap';
import React, {useState} from 'react';
import './Styles.css';
import {Comment} from '../comment/Comment';
import Moment from 'moment';
import {Row} from 'reactstrap';
import {CommentTab} from './commentTab/CommentTab';

export const CommentsContainer = (props) => {
  const [activeTab, setActiveTab] = useState('PUBLIC');
  const toggle = (tab) => {
    setActiveTab(tab);
  };
  const publicComments = props.comments.filter(
    (comment) => comment.category === 'PUBLIC',
  );

  const privateComments = props.comments.filter(
    (comment) => comment.category === 'PRIVATE',
  );

  return (
    <Container className="comment-box">
      <Row className="comment-box-title">Comentarios</Row>
      <Row className="tabs">
        <CommentTab
          content={'Públicos'}
          toggle={toggle}
          value={'PUBLIC'}
          activeTab={activeTab}
        />
        <CommentTab
          content={'Privados'}
          toggle={toggle}
          value={'PRIVATE'}
          activeTab={activeTab}
        />
      </Row>
      <Row className="comments-box">
        {activeTab === 'PUBLIC' ? (
          publicComments.length > 0 ? (
            publicComments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  name={comment.user.profile.name}
                  secondName={comment.user.profile.surename}
                  date={Moment(comment.date).format('DD/MM/YYYY HH:mm')}
                  comment={comment.comment}
                  image={comment.user.profile.photo}
                  type={comment.category}
                />
              );
            })
          ) : (
            <p>Aún no hay comentarios públicos cargados</p>
          )
        ) : privateComments.length > 0 ? (
          privateComments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                name={comment.user.profile.name}
                secondName={comment.user.profile.surename}
                date={Moment(comment.date).format('DD/MM/YYYY HH:mm')}
                comment={comment.comment}
                image={comment.user.profile.photo}
                type={comment.category}
              />
            );
          })
        ) : (
          <p>Aún no hay comentarios privados cargados</p>
        )}
      </Row>
    </Container>
  );
};
