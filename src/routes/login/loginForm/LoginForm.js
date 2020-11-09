import Container from 'react-bootstrap/Container';
import React from 'react';
import './Styles.css';
import {EmailTextBox} from './textBox/emailTextBox/EmailTextBox';
import {PasswordTextBox} from './textBox/passwordTextBox/PasswordTextBox';
import {SignInButton} from './signInButton/SignInButton';

export const LoginForm = (props) => {
  return (
    <Container className="login-box">
      <div className="title">
        Conta<div className="yellow-text">ME</div>
      </div>
      <div className="sub-title">Acceder</div>
      <EmailTextBox
        text={'Email'}
        email={props.email}
        setEmail={props.setEmail}
      />
      <PasswordTextBox
        text={'Contraseña'}
        password={props.password}
        setPassword={props.setPassword}
      />
      <SignInButton
        email={props.email}
        password={props.password}
        onClick={props.onSubmit}
      />
    </Container>
  );
};
