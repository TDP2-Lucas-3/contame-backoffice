import React from 'react';
import './states/ReportedLabel.css';
import {IconContext} from 'react-icons';
import {GoReport} from 'react-icons/all';

export const StateLabel = (props) => {
  return (
    <IconContext.Provider value={{className: 'report-icon'}}>
      <div className="reported-label-box" onClick={props.flipModal}>
        <p>Estado Público</p>
        <div className="reported-label-content">
          <label className="reported-label-text" onClick={props.flipModal}>
            {props.state}
          </label>
        </div>
      </div>
      <div
        className="reported-label-box box-private-position"
        onClick={props.flipModal}>
        <p>Estado Privado</p>
        <div className="reported-label-content">
          <label className="reported-label-text" onClick={props.flipModal}>
            {props.statePrivate}
          </label>
        </div>
      </div>
    </IconContext.Provider>
  );
};
