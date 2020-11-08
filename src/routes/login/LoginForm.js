import Container from 'react-bootstrap/Container';
import React, {useState} from 'react';
import './Styles.css';
import {TextBox} from './textBox/TextBox';
import {SignInButton} from './signInButton/SignInButton';
import {signIn} from '../../services/authentication';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/auth';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onClick = async () => {
    const response = await signIn(email, password);
    dispatch(login(response.data.token));
    console.log(response.data.token);
    if (!response.data.token) {
      history.push('/incidents');
    }
  };

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
        email={email}
        setEmail={setEmail}
      />
      <TextBox
        text={'Contraseña'}
        type={'password'}
        password={password}
        setPassword={setPassword}
      />
      <SignInButton email={email} password={password} onClick={onClick} />
    </Container>
  );
};
