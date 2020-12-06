import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import React from 'react';
import {chartOptions} from './options';

const parseData = (data) => {
  const state = data[0].categories.map((category) => category.name);
  const series = data.map((x) => {
    return {name: x.name, data: x.categories.map((category) => category.value)};
  });

  return {
    ...chartOptions,
    xAxis: {
      categories: state,
    },
    series,
  };
};

export const StackedBarChart = (props) => {
  const options = parseData(props.data);
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
