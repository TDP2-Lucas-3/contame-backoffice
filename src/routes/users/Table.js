import React from 'react';
import MaterialTable from 'material-table';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  centered: {
    position: 'fixed',
    left: '48%',
    top: '45%',
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
    showTitle: false,
    headerStyle: {
      backgroundColor: '#039be5',
      color: '#FFF',
      fontSize: '14pt',
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
  };
  const classes = useStyles();

  return (
    <div>
      {!props.data ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <MaterialTable
          title="Usuarios"
          data={props.data}
          columns={columns}
          options={options}
          localization={localization}
        />
      )}
    </div>
  );
};

export {Table};
