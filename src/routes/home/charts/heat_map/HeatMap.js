import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../services/Resources';
import {HeatMapChart} from './HeatMapChart';
import CircularProgress from '@material-ui/core/CircularProgress';
import {HeatMapTable} from '../../heatMapTable/HeatMapTable';

export const HeatMap = () => {
  const resources = useSelector((state) => state.auth.resources);

  const incidentsByHood = useGetResource(async () => {
    const response = await resources.mapData();
    return response.hoodRanking.map((ranking) => {
      return {hood: ranking.hood, count: ranking.value};
    });
  });

  const points = useGetResource(async () => {
    const response = await resources.incidents();
    //setIncidentsByHood(format(response));
    return response.map((incident) => {
      return {lat: incident.lat, lng: incident.lon};
    });
  });

  return points ? (
    <>
      <HeatMapChart data={points} />
      <HeatMapTable data={incidentsByHood} />
    </>
  ) : (
    <CircularProgress />
  );
};
