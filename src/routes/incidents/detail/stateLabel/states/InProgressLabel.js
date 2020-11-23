import React from 'react';
import './InProgressLabel.css';
import {FaHammer} from 'react-icons/fa';
import {IconContext} from 'react-icons';

export const InProgressLabel = (props) => {
  return (
    <IconContext.Provider value={{className: 'progress-icon'}}>
      <div className="progress-label-box">
        <FaHammer />
        <label
          className="progress-label-content"
          onClick={() => props.setModalVisible(!props.modalVisible)}>
          {props.state}
        </label>
      </div>
    </IconContext.Provider>
  );
};
