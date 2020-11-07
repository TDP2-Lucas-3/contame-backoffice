import React from 'react';
import {LoginForm} from './login/LoginForm';
import {withRouter} from 'react-router-dom';

export const Login = withRouter(() => {
  return <LoginForm />;
});
