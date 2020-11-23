import React from 'react';
import {IconContext} from 'react-icons';
import {FaHammer} from 'react-icons/fa';
import './Styles.css';

export const InProgressAction = () => {
  return (
    <IconContext.Provider value={{className: 'progress-action-icon'}}>
      <button
        type="button"
        className="progress-action"
        onClick={() => console.log('EN PROGRESO')}>
        <FaHammer />
        Marcar en progreso
      </button>
    </IconContext.Provider>
  );
};
