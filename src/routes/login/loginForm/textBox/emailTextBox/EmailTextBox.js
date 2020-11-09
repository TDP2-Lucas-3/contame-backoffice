import './Styles.css';
import React from 'react';
import {CssTextField} from '../CssTextField';

export const EmailTextBox = (props) => {
  return (
    <CssTextField
      className="email-box"
      label={props.text}
      variant="outlined"
      id="emailText"
      onChange={(e) => props.setEmail(e.target.value)}
    />
  );
};
