import {Table} from './incidents/table/Table';
import {Detail} from './incidents/detail/Detail';
import {useSelector} from 'react-redux';
import {useGetResource} from '../services/Resources';
import React from 'react';

function Incidents() {
  const resources = useSelector((state) => state.auth.resources);
  const incidents = useGetResource(() => resources.incidents());
  return <Table data={incidents} />;
}

export const IncidentDetail = (props) => {
  const resources = useSelector((state) => state.auth.resources);
  const incident = useGetResource(() => resources.incident(props.id));
  return <Detail data={incident} />;
};

export {Incidents};
