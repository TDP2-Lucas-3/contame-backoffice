import React from 'react';
import './Description.css';

export const Description = (props) => {
  return (
    <div className="description-box">
      <h1 className="description-header">Descripcion</h1>
      <label className="description-text">{props.data}</label>
    </div>
  );
};
