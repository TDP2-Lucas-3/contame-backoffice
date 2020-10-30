import React from 'react';
import {Table} from './incidents/Table';
import {useSelector} from 'react-redux';
import {useGetResource} from '../services/Resources';

function Incidents() {
  const resources = useSelector((state) => state.auth.resources);
  const incidents = useGetResource(() => resources.incidents());
  return <Table data={incidents} />;
}

export {Incidents};
