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

const getValueFromKey = (array, key) => {
  return array.filter((obj) => obj.key === key).map((obj) => obj.value)[0];
};

export const ChangeStateModalContainer = (props) => {
  const {
    modalVisible,
    closeDialog,
    initialPublicState,
    id,
    endpoint,
    fetchStatesMethod,
    title,
    label,
    setStateLabel,
  } = props;
  const resources = useSelector((state) => state.auth.resources);

  const states = useGetResource(() => resources[fetchStatesMethod]());
  const [state, setState] = useState(null);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (states === null) {
      return;
    }
    const s = getKeyFromValue(states, initialPublicState);
    setState(s);
  }, [states, initialPublicState]);

  const submit = async () => {
    await resources[endpoint](id, state, comment);
    closeDialog();
    setStateLabel(getValueFromKey(states, state));
  };

  return (
    <ChangeStateModal
      modalVisible={modalVisible}
      close={closeDialog}
      states={states}
      state={state}
      setState={setState}
      comment={comment}
      setComment={setComment}
      submit={submit}
      title={title}
      label={label}
    />
  );
};
