import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import React from 'react';
import {chartOptions} from './options';

const parseData = (data) => {
  const series = data.map((x) => {
    return {name: x.name, data: x.categories.map((category) => category.value)};
  });

  return {
    ...chartOptions,
    series,
  };
};

const xAxis = (categoryTotals) => {
  return {
    categories: categoryTotals.map((x) => x.category),
  };
};

export const StackedBarChart = (props) => {
  const options = parseData(props.data);
  options.xAxis = xAxis(props.categoryTotals);
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
