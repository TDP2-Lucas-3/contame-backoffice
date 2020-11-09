import './Styles.css';
import React from 'react';
import {CssTextField} from '../CssTextField';

export const PasswordTextBox = (props) => {
  return (
    <CssTextField
      className="password-box"
      label={props.text}
      variant="outlined"
      id="passwordText"
      type="password"
      onChange={(e) => props.setPassword(e.target.value)}
    />
  );
};
