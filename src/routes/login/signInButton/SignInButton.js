import React from 'react';
import Button from 'react-bootstrap/Button';
import './Styles.css';

export const SignInButton = (props) => {
  return (
    <Button
      variant="primary"
      className="sign-in-button"
      onClick={props.onClick}>
      Ingresar
    </Button>
  );
};
