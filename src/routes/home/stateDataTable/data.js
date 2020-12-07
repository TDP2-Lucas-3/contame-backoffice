export const getColumns = (props) => {
  const columns = [];
  columns.push({
    title: 'Estado',
    field: 'name',
  });

  columns.push({
    title: `categories[0].category`,
    field: `categories[0].category`,
  });

  return columns;
  // Faltan agregar los campos faltantes
};

export const options = {
  selection: false,
  search: false,
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
