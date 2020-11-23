import React from 'react';
import {IconContext} from 'react-icons';
import {GoCheck} from 'react-icons/go';

export const SolvedAction = () => {
  return (
    <IconContext.Provider value={{className: 'solved-action-icon'}}>
      <button
        type="button"
        className="solved-action"
        onClick={() => console.log('RESUELTO')}>
        <GoCheck />
        Marcar como resuelto
      </button>
    </IconContext.Provider>
  );
};
