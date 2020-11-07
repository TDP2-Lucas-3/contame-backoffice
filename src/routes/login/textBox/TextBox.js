import './Styles.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
      fontSize: '0pt',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#F4D35E',
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
          InputLabelProps={{shrink: false}}
        />
      ) : (
        <CssTextField
          className="email-box"
          label={props.text}
          variant="outlined"
          id="emailText"
          InputLabelProps={{shrink: false}}
        />
      )}
    </>
  );
};
