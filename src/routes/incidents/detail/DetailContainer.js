import {useStyles} from '../filteredTable/table/Styles';
import React, {useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Detail} from './Detail';

export const DetailContainer = (props) => {
  const classes = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const [privateModalVisible, setPrivateModalVisible] = useState(false);

  const closeDialog = () => {
    setModalVisible(false);
    setPrivateModalVisible(false);
  };

  const openPublicModal = () => {
    setModalVisible(true);
  };

  const openPrivateModal = () => {
    setPrivateModalVisible(true);
  };

  return (
    <div className="box">
      <label className="header-text">Detalle de incidencia</label>
      {!props.data || !props.comments ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <Detail
          data={props.data}
          comments={props.comments}
          openPrivateModal={openPrivateModal}
          openPublicModal={openPublicModal}
          closeDialog={closeDialog}
          modalVisible={modalVisible}
          privateModalVisible={privateModalVisible}
        />
      )}
    </div>
  );
};
