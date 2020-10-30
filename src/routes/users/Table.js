import React from 'react';
import MaterialTable from 'material-table';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';

const useStyles = makeStyles({
  centered: {
    position: 'fixed',
    left: '55%',
    top: '45%',
    color: '#1F271B',
  },
  table: {
    position: 'relative',
    left: '117px',
    top: '90px',
    width: 1120,
  },
});
const Table = (props) => {
  const columns = [
    {
      title: 'Email',
      field: 'email',
    },
  ];

  const options = {
    selection: false,
    headerStyle: {
      backgroundColor: '#F4D35E',
      color: '#1F271B',
      fontSize: '11pt',
      fontWeight: 'bold',
    },
    cellStyle: {
      fontSize: '9pt',
    },
    actionsColumnIndex: -1,
  };

  const localization = {
    toolbar: {
      searchPlaceholder: 'Buscar',
    },
    pagination: {
      labelDisplayedRows: '{from}-{to} de {count}',
      labelRowsSelect: 'filas',
    },
    body: {
      emptyDataSourceMessage: 'No se han registrado incidencias todavia',
    },
  };
  const classes = useStyles();

  return (
    <div>
      {!props.data ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <Container className={classes.table}>
          <MaterialTable
            title="Usuarios"
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
