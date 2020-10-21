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

const renderImagesCollection = (row) => {
  return (
    <div>
      {row.images.length > 0
        ? row.images.map((image, index) => {
            return (
              <a
                key={index}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: 'none'}}>
                {`${++index} `}
              </a>
            );
          })
        : 'N/A'}
    </div>
  );
};

const Table = (props) => {
  const columns = [
    {
      title: 'Titulo',
      field: 'title',
    },
    {
      title: 'Categoria',
      field: 'category.name',
    },
    {
      title: 'Descripcion',
      field: 'description',
      emptyValue: 'N/A',
    },
    {
      title: 'Latitud',
      field: 'lat',
      render: (row) =>
        row.lat !== 0.0 ? Number.parseFloat(row.lat).toFixed(4) : 'N/A',
    },
    {
      title: 'Longitud',
      field: 'lon',
      render: (row) =>
        row.lon !== 0.0 ? Number.parseFloat(row.lon).toFixed(4) : 'N/A',
    },
    {
      title: 'Fecha de reporte',
      field: 'creationDate',
      type: 'date',
      align: 'center',
    },
    {
      title: 'Fecha ultima actualizacion',
      field: 'updateDate',
      type: 'date',
    },
    {
      title: 'Fecha de cierre',
      field: 'completeDate',
      type: 'date',
      emptyValue: 'N/A',
      align: 'center',
    },
    {
      title: 'Imagenes',
      field: 'images',
      render: (row) => renderImagesCollection(row),
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
          title="Incidencias"
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
