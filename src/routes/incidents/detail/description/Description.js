import React from 'react';
import './Description.css';

export const Description = (props) => {
  const displayMessage = !props.data ? 'N/A' : props.data;

  return (
    <div className="description-box">
      <h1 className="description-header">Descripcion</h1>
      <label className="description-text">{displayMessage}</label>
    </div>
  );
};
