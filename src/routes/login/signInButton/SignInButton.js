import React from 'react';
import Button from 'react-bootstrap/Button';
import './Styles.css';

const foo = (props) => {
  console.log(props);
};

export const SignInButton = (props) => {
  return (
    <Button
      variant="primary"
      className="sign-in-button"
      onClick={() => foo(props.email)}>
      Ingresar
    </Button>
  );
};
