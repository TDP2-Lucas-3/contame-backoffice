import React from 'react';
import './ReportedLabel.css';
import {GoReport} from 'react-icons/all';
import {IconContext} from 'react-icons';

export const ReportedLabel = (props) => {
  return (
    <IconContext.Provider value={{className: 'report-icon'}}>
      <div className="reported-label-box">
        <GoReport />
        <label className="reported-label-content">{props.state}</label>
      </div>
    </IconContext.Provider>
  );
};
