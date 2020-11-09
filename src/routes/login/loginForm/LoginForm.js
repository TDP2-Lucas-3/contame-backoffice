import Container from 'react-bootstrap/Container';
import React from 'react';
import './Styles.css';
import {TextBox} from './textBox/TextBox';
import {SignInButton} from './signInButton/SignInButton';

export const LoginForm = (props) => {
  return (
    <Container className="login-box">
      <div className="title">
        Conta<div className="yellow-text">ME</div>
      </div>
      <div className="sub-title">Acceder</div>
      <TextBox
        text={'Email'}
        type={''}
        className="email-text"
        email={props.email}
        setEmail={props.setEmail}
      />
      <TextBox
        text={'Contraseña'}
        type={'password'}
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
