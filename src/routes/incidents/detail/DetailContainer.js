import {useStyles} from '../filteredTable/table/Styles';
import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Detail} from './Detail';
import {useSelector} from 'react-redux';

export const DetailContainer = (props) => {
  const classes = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const [privateModalVisible, setPrivateModalVisible] = useState(false);
  const [comments, setComments] = useState([]);

  const resources = useSelector((state) => state.auth.resources);
  useEffect(() => {
    setComments(props.comments || []);
  }, [props.comments]);

  const refreshComments = async () => {
    setComments(await resources.comments(props.data.id));
  };

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
          comments={comments}
          openPrivateModal={openPrivateModal}
          openPublicModal={openPublicModal}
          closeDialog={closeDialog}
          modalVisible={modalVisible}
          privateModalVisible={privateModalVisible}
          refreshComments={refreshComments}
        />
      )}
    </div>
  );
};
