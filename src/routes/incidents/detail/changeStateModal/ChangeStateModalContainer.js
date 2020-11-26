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
  const {
    modalVisible,
    closeDialog,
    initialPrivateState,
    initialPublicState,
  } = props;
  const resources = useSelector((state) => state.auth.resources);

  const publicStates = useGetResource(() => resources.publicStates());
  const privateStates = useGetResource(() => resources.privateStates());
  const [publicState, setPublicState] = useState(null);
  const [privateState, setPrivateState] = useState(null);

  useEffect(() => {
    if (publicStates === null || privateStates === null) {
      return;
    }
    const s = getKeyFromValue(publicStates, initialPublicState);
    const p = getKeyFromValue(privateStates, initialPrivateState);
    setPublicState(s);
    setPrivateState(p);
  }, [privateStates, publicStates, initialPrivateState, initialPublicState]);
  return (
    <ChangeStateModal
      modalVisible={modalVisible}
      close={closeDialog}
      publicStates={publicStates}
      privateStates={privateStates}
      publicState={publicState}
      privateState={privateState}
      setPublicState={setPublicState}
      setPrivateState={setPrivateState}
    />
  );
};
