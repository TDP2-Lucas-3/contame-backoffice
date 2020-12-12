export const columns = [
  {
    title: 'Barrio',
    field: 'hood',
  },
  {
    title: 'Cantidad de Incidencias',
    field: 'count',
    defaultSort: 'desc',
  },
];

export const options = {
  selection: false,
  search: false,
  pageSize: 10,
  headerStyle: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '11pt',
    fontWeight: 'bold',
    width: '2px',
    maxWidth: '2px',
  },
  cellStyle: {
    fontSize: '10pt',
    width: '20',
    maxWidth: '20',
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
    emptyDataSourceMessage: 'No hay informacion disponible.',
  },
};
