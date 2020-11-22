import React from 'react';
import './ArchivedLabel.css';
import {FaFileArchive} from 'react-icons/fa';
import {IconContext} from 'react-icons';

export const ArchivedLabel = (props) => {
  return (
    <IconContext.Provider value={{className: 'archived-icon'}}>
      <div className="archived-label-box">
        <FaFileArchive />
        <label className="archived-label-content">{props.state}</label>
      </div>
    </IconContext.Provider>
  );
};
