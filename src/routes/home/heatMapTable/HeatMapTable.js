import React from 'react';
import MaterialTable, {MTableToolbar} from 'material-table';
import {columns, localization, options} from './data';

export const HeatMapTable = (props) => {
  return (
    <MaterialTable
      title=""
      data={props.data}
      columns={columns}
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
