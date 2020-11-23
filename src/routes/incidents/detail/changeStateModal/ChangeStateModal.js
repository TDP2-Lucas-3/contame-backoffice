import React, {useState} from 'react';
import {Form, FormGroup} from 'reactstrap';
import {CommentSection} from './commentSection/CommentSection';
import './ChangeStateModal.css';
import {ArchiveAction} from './actions/ArchiveAction';
import {SolvedAction} from './actions/SolvedAction';
import {InProgressAction} from './actions/InProgressAction';

export const ChangeStateModal = (props) => {
  let newStates = [];
  const [commentText, setCommentText] = useState('');
  switch (props.data.state) {
    case 'REPORTADO':
      newStates.push(
        <ArchiveAction id={props.data.id} comment={commentText} />,
      );
      newStates.push(<InProgressAction />);
      break;
    case 'EN PROGRESO':
      newStates.push(<SolvedAction />);
      break;
    default:
      break;
  }
  return (
    <Form className="change-state-modal">
      <FormGroup className="new-state-section">
        {newStates.map((action) => action)}
      </FormGroup>
      <FormGroup className="comment-section-container">
        <CommentSection setCommentText={setCommentText} />
      </FormGroup>
    </Form>
  );
};
