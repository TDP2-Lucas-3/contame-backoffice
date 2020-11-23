import React from 'react';
import {IconContext} from 'react-icons';
import {GoCheck} from 'react-icons/go';
import './Styles.css';

export const SolvedAction = () => {
  return (
    <IconContext.Provider value={{className: 'solved-action-icon'}}>
      <div className="solved-action">
        <GoCheck />
        <label className="solved-action-content">Marcar como resuelto</label>
      </div>
    </IconContext.Provider>
  );
};
