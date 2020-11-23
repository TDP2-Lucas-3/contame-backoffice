import React from 'react';
import {IconContext} from 'react-icons';
import {FaFileArchive} from 'react-icons/fa';
import './Styles.css';
import {useSelector} from 'react-redux';

export const ArchiveAction = (props) => {
  const resources = useSelector((state) => state.auth.resources);
  const callback = () =>
    resources.newState(props.id, 'ARCHIVADO', props.comment);

  return (
    <IconContext.Provider value={{className: 'archive-action-icon'}}>
      <button type="button" className="archive-action" onClick={callback}>
        <FaFileArchive />
        Archivar
      </button>
    </IconContext.Provider>
  );
};
//() => newState(props.id, 'ARCHIVADO', props.comment)