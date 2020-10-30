import React, {useEffect} from 'react';
import {Table} from './incidents/table/Table';
import {useSelector} from 'react-redux';

function Incidents() {
  const [data, setData] = React.useState(null);
  const resources = useSelector((state) => state.auth.resources);
  useEffect(async () => {
    const incidents = await resources.incidents();
    setData(incidents);
  }, []);
  return <Table data={data} />;
}

export {Incidents};
