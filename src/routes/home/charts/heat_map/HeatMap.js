import React from 'react';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../services/Resources';
import {HeatMapChart} from './HeatMapChart';
import CircularProgress from '@material-ui/core/CircularProgress';

export const HeatMap = () => {
  const resources = useSelector((state) => state.auth.resources);
  const points = useGetResource(async () => {
    const response = await resources.incidents();
    return response.map((incident) => {
      return {lat: incident.lat, lng: incident.lon};
    });
  });

  return points ? <HeatMapChart data={points} /> : <CircularProgress />;
};
