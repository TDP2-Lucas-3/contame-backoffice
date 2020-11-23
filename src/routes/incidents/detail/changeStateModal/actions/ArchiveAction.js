import React from 'react';
import {IconContext} from 'react-icons';
import {FaFileArchive} from 'react-icons/fa';
import './Styles.css';

export const ArchiveAction = () => {
  return (
    <IconContext.Provider value={{className: 'archive-action-icon'}}>
      <div className="archive-action">
        <FaFileArchive />
        <label className="archive-action-content">Archivar</label>
      </div>
    </IconContext.Provider>
  );
};
