import {FilteredTable} from './incidents/filteredTable/FilteredTable';
import {Detail} from './incidents/detail/Detail';
import {useSelector} from 'react-redux';
import {useGetResource} from '../services/Resources';
import React from 'react';

function Incidents() {
  const resources = useSelector((state) => state.auth.resources);
  const incidents = useGetResource(() => resources.incidents());
  return <FilteredTable data={incidents} />;
}

export const IncidentDetail = ({match}) => {
  const resources = useSelector((state) => state.auth.resources);
  const incident = useGetResource(() => resources.incident(match.params.id));
  return <Detail data={incident} />;
};

export {Incidents};
