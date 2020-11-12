import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../services/authentication';
import {login} from '../../redux/auth';
import {LoginForm} from './loginForm/LoginForm';
import {useHistory} from 'react-router-dom';
import {LoginErrorLabel} from './loginForm/loginErrorLabel/LoginErrorLabel';

export const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async () => {
    let response;

    try {
      response = await signIn(email, password);
    } catch {
      setAuth(false);
      return;
    }
    if (response.status === 200) {
      setAuth(true);
      dispatch(login(response.data.token));
      history.push('/');
    }
  };

  return (
    <>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
      {auth === false ? <LoginErrorLabel className="error-labels" /> : null}
    </>
  );
};
