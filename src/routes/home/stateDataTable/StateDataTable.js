import React from 'react';
import MaterialTable, {MTableToolbar} from 'material-table';
import {getColumns, options, localization} from './data';

export const StateDataTable = (props) => {
  return (
    <MaterialTable
      title=""
      data={props.data}
      columns={getColumns(props.data)}
      options={options}
      localization={localization}
      components={{
        // eslint-disable-next-line react/display-name
        Toolbar: (props) => (
          <div
            style={{
              height: '0px',
            }}>
            <MTableToolbar {...props} />
          </div>
        ),
      }}
    />
  );
};
