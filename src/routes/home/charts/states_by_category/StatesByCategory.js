import React, {useState} from 'react';
import {StackedBarChart} from './StackedBarChart';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../services/Resources';
import CircularProgress from '@material-ui/core/CircularProgress';
import {StateDataTable} from '../../stateDataTable/StateDataTable';
import {Filters} from './Filters';

export const StatesByCategory = () => {
  const resources = useSelector((state) => state.auth.resources);
  const [hoods, setHoods] = useState(null);
  const [response, setResponse] = useState(null);

  const refreshData = async (newHood) => {
    const resp = await resources.stateData(newHood);
    setHoods(resp.hoods);
    setResponse(resp);
  };
  useGetResource(refreshData);

  const onHoodChange = async (newHood) => {
    setResponse(null);
    await refreshData(newHood);
  };

  return hoods ? (
    <>
      <Filters hoods={hoods} onHoodChange={onHoodChange} />
      {response ? (
        <>
          <StackedBarChart
            data={response.data}
            categoryTotals={response.categoryTotals}
          />
          <StateDataTable data={response.data} />
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  ) : (
    <CircularProgress />
  );
};
