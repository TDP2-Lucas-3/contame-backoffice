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
    left: '108px',
    top: '90px',
    width: 1100,
  },
});
const Table = (props) => {

  const columns = [
    {
      title: 'Email',
      field: 'email',
    },

    {
      title: 'Nombre',
      field: 'name',
    },
    {
      title: 'Apellido',
      field: 'surname',
    },
    {
      title: 'Fecha Registro',
      field: 'registerDate',
      type: 'date',
      dateSetting: {locale: 'es-ES'},
      defaultSort: 'desc',
    },
    {
      title: 'Ultimo Ingreso',
      field: 'lastLoginDate',
      type: 'date',
      dateSetting: {locale: 'es-ES'},
    },
    {
      title: 'Cantidad de reportes',
      field: 'incidentCount',
    },
    {
      title: 'Estado',
      field: 'state',
    },
  ];

  const options = {
    selection: false,
    sorting: true,
    headerStyle: {
      backgroundColor: '#F4D35E',
      color: '#1F271B',
      fontSize: '11pt',
      fontWeight: 'bold',
      textAlign: 'left',
    },
    cellStyle: {
      fontSize: '9pt',
      textAlign: 'left',
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
