import React from 'react';
import MaterialTable from 'material-table';
import {getColumns, options, localization} from './data';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../services/Resources';

export const StateDataTable = () => {
  const resources = useSelector((state) => state.auth.resources);
  const response = useGetResource(() => resources.stateData());

  return response ? (
    <MaterialTable
      title=""
      data={response.data}
      columns={getColumns(response.data)}
      options={options}
      localization={localization}
    />
  ) : null;
};
