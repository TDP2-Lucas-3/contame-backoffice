import React from 'react';
import {StackedBarChart} from './StackedBarChart';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../services/Resources';
import CircularProgress from '@material-ui/core/CircularProgress';

export const StatesByCategory = () => {
  const resources = useSelector((state) => state.auth.resources);
  const response = useGetResource(() => resources.stateData());
  return response ? (
    <StackedBarChart
      data={response.data}
      categoryTotals={response.categoryTotals}
    />
  ) : (
    <CircularProgress />
  );
};
