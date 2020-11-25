import React from 'react';
import './states/ReportedLabel.css';
import {IconContext} from 'react-icons';
import {GoReport} from 'react-icons/all';

export const StateLabel = (props) => {
  return (
    <IconContext.Provider value={{className: 'report-icon'}}>
      <div className="reported-label-box">
        <GoReport />
        <label className="reported-label-content" onClick={props.flipModal}>
          {props.state}
        </label>
      </div>
    </IconContext.Provider>
  );
};
