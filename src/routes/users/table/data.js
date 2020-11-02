export const columns = [
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

export const options = {
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

export const localization = {
  toolbar: {
    searchPlaceholder: 'Buscar',
  },
  pagination: {
    labelDisplayedRows: '{from}-{to} de {count}',
    labelRowsSelect: 'filas',
  },
  body: {
    emptyDataSourceMessage: 'No se han encontrado usuarios',
  },
};
