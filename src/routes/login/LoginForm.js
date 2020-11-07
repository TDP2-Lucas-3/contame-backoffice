import Container from 'react-bootstrap/Container';
import React from 'react';
import './Styles.css';
import {TextBox} from './textBox/TextBox';
import {SignInButton} from './signInButton/SignInButton';

export const LoginForm = () => {
  return (
    <Container className="login-box">
      <div className="title">
        Conta<div className="yellow-text">ME</div>
      </div>
      <div className="sub-title">Acceder</div>
      <TextBox text={'Email'} type={''} className="email-text" />
      <TextBox text={'Contraseña'} type={'password'} />
      <SignInButton />
    </Container>
  );
};
