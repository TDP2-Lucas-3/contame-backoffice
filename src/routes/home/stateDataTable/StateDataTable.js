import React from 'react';
import MaterialTable from 'material-table';
import {getColumns, options, localization} from './data';

export const StateDataTable = (props) => {
  return (
    <MaterialTable
      title=""
      data={props.data}
      columns={getColumns(props.data)}
      options={options}
      localization={localization}
    />
  );
};
