import {renderImagesCollection} from './Utils';

export const columns = [
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
    title: 'Fecha reporte',
    field: 'creationDate',
    type: 'date',
    align: 'center',
    dateSetting: {locale: 'es-ES'},
  },
  {
    title: 'Fecha ultima actualizacion',
    field: 'updateDate',
    type: 'date',
    dateSetting: {locale: 'es-ES'},
  },
  {
    title: 'Fecha cierre',
    field: 'completeDate',
    type: 'date',
    emptyValue: 'N/A',
    align: 'center',
    dateSetting: {locale: 'es-ES'},
  },
  {
    title: 'Imagenes',
    field: 'images',
    render: (row) => renderImagesCollection(row),
  },
];

export const options = {
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

export const localization = {
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
