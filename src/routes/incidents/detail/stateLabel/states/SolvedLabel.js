import React from 'react';
import './SolvedLabel.css';
import {GoCheck} from 'react-icons/go';
import {IconContext} from 'react-icons';

export const SolvedLabel = (props) => {
  return (
    <IconContext.Provider value={{className: 'solved-icon'}}>
      <div className="solved-label-box">
        <GoCheck />
        <label className="solved-label-content">{props.state}</label>
      </div>
    </IconContext.Provider>
  );
};
