import React from 'react';
import './InfoBox.css';

export const InfoBox = (props) => {
  return (
    <div className="info-box">
      <h1 className="info-box-header">{props.header}</h1>
      <label className="info-box-content">{props.data}</label>
    </div>
  );
};
