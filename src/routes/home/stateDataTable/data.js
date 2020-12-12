export const getColumns = (props) => {
  const columns = [];

  columns.push({
    title: 'Estado',
    field: 'name',
  });

  for (let index in props[0].categories) {
    const item = props[0].categories[index];

    columns.push({
      title: item.category,
      field: `categories[${index}].value`,
    });
  }

  return columns;
};

export const options = {
  selection: false,
  search: false,
  paging: false,
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
