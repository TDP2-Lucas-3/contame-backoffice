import Highcharts from 'highcharts';

export const chartOptions = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Estados por categoría',
  },
  xAxis: {
    categories: [
      'Limpieza',
      'Vía Pública',
      'Espacios Verdes y Arbolados',
      'Uso del Espacio Público',
      'Alumbrado Público',
      'Autos abandonados',
    ],
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Incidencias',
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color:
          // theme
          (Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color) ||
          'gray',
      },
    },
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false,
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    },
  },
  series: [
    {
      name: 'Ingresado',
      data: [5, 3, 4, 7, 2, 0],
    },
    {
      name: 'En proceso',
      data: [2, 2, 3, 2, 1, 4],
    },
    {
      name: 'Inválido',
      data: [3, 4, 4, 2, 5, 2],
    },
    {
      name: 'Aceptado',
      data: [5, 3, 4, 7, 2, 0],
    },
    {
      name: 'Resuelto',
      data: [5, 3, 4, 7, 2, 0],
    },
    {
      name: 'Pendiente de Obra Mayor',
      data: [5, 3, 4, 7, 2, 0],
    },
  ],
};
