import React, {useState, useEffect} from 'react';
import {Table} from './users/table/Table';
import {useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';

export const Users = withRouter(() => {
  const [data, setData] = useState(null);
  const resources = useSelector((state) => state.auth.resources);
  useEffect(async () => {
    const users = await resources.users();
    setData(users);
  }, []);
  return <Table data={data} />;
});
