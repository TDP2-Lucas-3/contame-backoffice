import {Filter} from './Filter';
import React from 'react';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../../services/Resources';

export const PrivateStateFilter = (props) => {
  const resources = useSelector((state) => state.auth.resources);
  const states = useGetResource(async () =>
    (await resources.privateStates()).map((c) => c.value),
  );
  return (
    <Filter
      options={states || []}
      placeholder={'Estado interno'}
      handleChange={props.handleChange}
    />
  );
};
