import React from 'react';
import {IconContext} from 'react-icons';
import {FaHammer} from 'react-icons/fa';
import './Styles.css';

export const InProgressAction = () => {
  return (
    <IconContext.Provider value={{className: 'progress-action-icon'}}>
      <div className="progress-action">
        <FaHammer />
        <label className="progress-action-content">Marcar en progreso</label>
      </div>
    </IconContext.Provider>
  );
};
