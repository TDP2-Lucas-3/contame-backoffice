import React from 'react';
import './InfoBox.css';
import {AiFillCalendar} from 'react-icons/all';
import {IconContext} from 'react-icons';

export const InfoBox = (props) => {
  const displayMessage = props.data === 'Invalid date' ? 'N/A' : props.data;
  return (
    <IconContext.Provider value={{className: 'info-box-icon'}}>
      <div className="info-box">
        <AiFillCalendar />
        <h1 className="info-box-header">{props.header}</h1>
        <label className="info-box-content">{displayMessage}</label>
      </div>
    </IconContext.Provider>
  );
};
