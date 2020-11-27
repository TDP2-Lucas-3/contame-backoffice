import {Filter} from './Filter';
import React from 'react';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../../services/Resources';

export const PublicStateFilter = (props) => {
  const resources = useSelector((state) => state.auth.resources);
  const states = useGetResource(async () =>
    (await resources.publicStates()).map((c) => c.value),
  );
  return (
    <Filter
      options={states || []}
      placeholder={'Estado público'}
      handleChange={props.handleChange}
    />
  );
};
