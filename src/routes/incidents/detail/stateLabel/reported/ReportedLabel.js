import React from 'react';
import './ReportedLabel.css';
import {GoReport} from 'react-icons/all';
import {IconContext} from 'react-icons';

export const ReportedLabel = (props) => {
  console.log(props.state);
  return (
    <IconContext.Provider value={{className: 'report-icon'}}>
      <div className="label-box">
        <GoReport />
        <label className="label-content">{props.state}</label>
      </div>
    </IconContext.Provider>
  );
};
