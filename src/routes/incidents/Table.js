import React from 'react';
import MaterialTable from 'material-table';

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
    },
    {
      title: 'Latitud',
      field: 'lat',
      render: (row) => Number.parseFloat(row.lat).toFixed(4),
    },
    {
      title: 'Longitud',
      field: 'lon',
      render: (row) => Number.parseFloat(row.lon).toFixed(4),
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
      emptyValue: '-',
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

  return (
    <div>
      <MaterialTable
        title="Incidencias"
        data={props.data}
        columns={columns}
        options={options}
        localization={localization}
      />
    </div>
  );
};

export {Table};
