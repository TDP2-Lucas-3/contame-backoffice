import {ChangeStateModal} from './ChangeStateModal';
import React, {useEffect, useState} from 'react';
import {useGetResource} from '../../../../services/Resources';
import {useSelector} from 'react-redux';

const getKeyFromValue = (array, value) => {
  if (array === null || array === undefined) {
    return;
  }
  return array.filter((obj) => obj.value === value).map((obj) => obj.key)[0];
};

export const ChangeStateModalContainer = (props) => {
  const {modalVisible, closeDialog, initialPublicState, id} = props;
  const resources = useSelector((state) => state.auth.resources);

  const publicStates = useGetResource(() => resources.publicStates());
  const [publicState, setPublicState] = useState(null);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (publicStates === null) {
      return;
    }
    const s = getKeyFromValue(publicStates, initialPublicState);
    setPublicState(s);
  }, [publicStates, initialPublicState]);

  const submit = async () => {
    await resources.newState(id, publicState, comment);
    closeDialog();
  };

  return (
    <ChangeStateModal
      modalVisible={modalVisible}
      close={closeDialog}
      states={publicStates}
      state={publicState}
      setState={setPublicState}
      comment={comment}
      setComment={setComment}
      submit={submit}
    />
  );
};
