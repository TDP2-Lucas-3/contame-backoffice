import {renderTitle} from './Utils';

export const columns = [
  {
    title: 'Titulo',
    field: 'title',
    render: (row) => renderTitle(row),
  },
  {
    title: 'Categoría',
    field: 'category',
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
    title: 'Estado público',
    field: 'state',
    type: 'string',
  },
  {
    title: 'Estado interno',
    field: 'statePrivate',
    type: 'string',
  },
  {
    title: 'Barrio',
    field: 'hood',
    emptyValue: 'N/A',
  },
  {
    title: 'Votos',
    field: 'votes',
  },
];

export const options = {
  selection: false,
  search: false,
  headerStyle: {
    backgroundColor: '#1F271B',
    color: 'white',
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
