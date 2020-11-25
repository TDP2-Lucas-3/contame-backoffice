import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../services/authentication';
import {login} from '../../redux/auth';
import {LoginForm} from './loginForm/LoginForm';
import {useHistory} from 'react-router-dom';
import {LoginErrorLabel} from './loginForm/loginErrorLabel/LoginErrorLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from '../incidents/filteredTable/table/Styles';

export const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const onSubmit = async () => {
    let response;

    try {
      setLoading(true);
      response = await signIn(email, password);
    } catch {
      setLoading(false);
      setAuth(false);
      return;
    }
    setLoading(false);
    if (response.status === 200) {
      setAuth(true);
      dispatch(login(response.data.token));
      history.push('/');
    }
  };

  return (
    <>
      {loading ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
        />
      )}
      {auth === false ? <LoginErrorLabel className="error-labels" /> : null}
    </>
  );
};
