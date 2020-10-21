import React, {useState, useEffect} from 'react';
import {Table} from './users/Table';
import {withRouter} from 'react-router-dom';
import {getIncidents} from '../services/reports';

export const Users = withRouter(() => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getIncidents().then((response) => {
      setData(response.data);
    });
  }, []);
  return <Table data={data} />;
});
