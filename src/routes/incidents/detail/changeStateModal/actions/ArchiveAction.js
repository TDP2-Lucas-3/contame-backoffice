import React from 'react';
import {IconContext} from 'react-icons';
import {FaFileArchive} from 'react-icons/fa';
import './Styles.css';

export const ArchiveAction = () => {
  return (
    <IconContext.Provider value={{className: 'archive-action-icon'}}>
      <button
        type="button"
        className="archive-action"
        onClick={() => console.log('ARCHIVADO')}>
        <FaFileArchive />
        Archivar
      </button>
    </IconContext.Provider>
  );
};
