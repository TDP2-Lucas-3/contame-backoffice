import React, {useEffect} from 'react';
import {Table} from './incidents/Table';
import {getIncidents} from '../services/reports';

function Incidents() {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    getIncidents().then((response) => {
      setData(response.data);
    });
  }, []);
  return <Table data={data} />;
}

export {Incidents};
