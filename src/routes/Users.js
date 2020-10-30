import React from 'react';
import {Table} from './users/table/Table';
import {useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {useGetResource} from '../services/Resources';

export const Users = withRouter(() => {
  const resources = useSelector((state) => state.auth.resources);
  const users = useGetResource(() => resources.users());
  return <Table data={users} />;
});
