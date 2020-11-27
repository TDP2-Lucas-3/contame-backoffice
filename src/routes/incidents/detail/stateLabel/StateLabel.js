import React from 'react';
import './states/ReportedLabel.css';
import {IconContext} from 'react-icons';

export const StateLabel = (props) => {
  return (
    <IconContext.Provider value={{className: 'report-icon'}}>
      <div className="reported-label-box" onClick={props.openPublicModal}>
        <p>Estado Público</p>
        <div className="reported-label-content">
          <label className="reported-label-text">{props.state}</label>
        </div>
      </div>
      <div
        className="reported-label-box box-private-position"
        onClick={props.openPrivateModal}>
        <p>Estado Interno</p>
        <div className="reported-label-content">
          <label className="reported-label-text">{props.statePrivate}</label>
        </div>
      </div>
    </IconContext.Provider>
  );
};
