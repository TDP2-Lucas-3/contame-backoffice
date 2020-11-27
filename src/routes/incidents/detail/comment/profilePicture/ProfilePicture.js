import React from 'react';
import './Styles.css';
import {Container} from 'react-bootstrap';
const DEFAULT_IMG = process.env.REACT_APP_ADMIN_DEFAULT_PICTURE_URL;

export const ProfilePicture = (props) => {
  return (
    <Container className="profile-picture-container">
      <img
        src={props.image || DEFAULT_IMG}
        alt={'Profile'}
        className="profile-picture"
      />
    </Container>
  );
};
