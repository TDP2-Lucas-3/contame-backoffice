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

  const [selectedHood, setSelectedHood] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const refreshData = async (newHood, startDate, endDate) => {
    const resp = await resources.stateData(newHood, startDate, endDate);
    setHoods(resp.hoods);
    setResponse(resp);
  };
  useGetResource(refreshData);

  const onHoodChange = async (newHood) => {
    setResponse(null);
    setSelectedHood(newHood);
    await refreshData(newHood, selectedStartDate, selectedEndDate);
  };

  const onStartDateChange = async (startDate) => {
    setResponse(null);
    setSelectedStartDate(startDate);
    await refreshData(selectedHood, startDate, selectedEndDate);
  };

  const onEndDateChange = async (endDate) => {
    setResponse(null);
    setSelectedEndDate(endDate);
    await refreshData(selectedHood, selectedStartDate, endDate);
  };

  return hoods ? (
    <>
      <Filters
        hoods={hoods}
        onHoodChange={onHoodChange}
        onStartDateChange={onStartDateChange}
        onEndDateChange={onEndDateChange}
      />
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
