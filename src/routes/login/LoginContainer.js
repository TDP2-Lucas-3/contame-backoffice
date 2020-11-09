import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../services/authentication';
import {login} from '../../redux/auth';
import {LoginForm} from './loginForm/LoginForm';
import {useHistory} from 'react-router-dom';

export const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async () => {
    const response = await signIn(email, password);
    dispatch(login(response.data.token));
    if (response.data.token) {
      history.push('/');
    }
  };

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
};
