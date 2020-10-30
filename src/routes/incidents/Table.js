import React from 'react';
import MaterialTable from 'material-table';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Container} from '@material-ui/core';
import {useStyles} from './Styles';
import {columns, options, localization} from './data';

const Table = (props) => {
  const classes = useStyles();
  return (
    <div>
      {!props.data ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <Container className={classes.table}>
          <MaterialTable
            title="Incidencias registradas"
            data={props.data}
            columns={columns}
            options={options}
            localization={localization}
          />
        </Container>
      )}
    </div>
  );
};

export {Table};
