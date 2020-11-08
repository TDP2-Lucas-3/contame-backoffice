import './Styles.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#1F271B',
      fontSize: '14pt',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#1F271B',
      },
    },
  },
})(TextField);

export const TextBox = (props) => {
  return (
    <>
      {props.type === 'password' ? (
        <CssTextField
          id="passwordText"
          label={props.text}
          type="password"
          autoComplete="current-password"
          variant="outlined"
          className="password-box"
          onChange={(e) => props.setPassword(e.target.value)}
        />
      ) : (
        <CssTextField
          className="email-box"
          label={props.text}
          variant="outlined"
          id="emailText"
          onChange={(e) => props.setEmail(e.target.value)}
        />
      )}
    </>
  );
};
