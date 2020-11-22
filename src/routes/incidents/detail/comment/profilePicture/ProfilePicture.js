import React from 'react';
import './Styles.css';
import {Container} from 'react-bootstrap';

export const ProfilePicture = (props) => {
  return (
    <Container className="profile-picture-container">
      <img src={props.image} alt={'Profile'} className="profile-picture" />
    </Container>
  );
};
