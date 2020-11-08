import React from 'react';
import {LoginContainer} from './login/LoginContainer';
import {withRouter} from 'react-router-dom';

export const Login = withRouter(() => {
  return <LoginContainer />;
});
