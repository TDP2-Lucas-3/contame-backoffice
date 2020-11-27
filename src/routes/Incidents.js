import {FilteredTable} from './incidents/filteredTable/FilteredTable';
import {useSelector} from 'react-redux';
import {useGetResource} from '../services/Resources';
import React from 'react';
import {DetailContainer} from './incidents/detail/DetailContainer';

function Incidents() {
  const resources = useSelector((state) => state.auth.resources);
  const incidents = useGetResource(() => resources.incidents());
  return <FilteredTable data={incidents} />;
}

export const IncidentDetail = ({match}) => {
  const resources = useSelector((state) => state.auth.resources);
  const incident = useGetResource(() => resources.incident(match.params.id));
  return <DetailContainer data={incident} />;
};

export {Incidents};
