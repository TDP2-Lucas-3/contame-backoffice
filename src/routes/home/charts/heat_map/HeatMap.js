import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../services/Resources';
import {HeatMapChart} from './HeatMapChart';
import CircularProgress from '@material-ui/core/CircularProgress';
import {HeatMapTable} from '../../heatMapTable/HeatMapTable';

export const HeatMap = () => {
  const resources = useSelector((state) => state.auth.resources);

  const [incidentsByHood, setIncidentsByHood] = useState([]);

  const format = (incidents) => {
    return incidents
      .map((incident) => {
        return {hood: incident.hood, count: 1};
      })
      .reduce(
        (res, obj) => {
          if (!(obj.hood in res)) res.__array.push((res[obj.hood] = obj));
          else {
            res[obj.hood].count += obj.count;
          }
          return res;
        },
        {__array: []},
      ).__array;
  };

  const points = useGetResource(async () => {
    const response = await resources.incidents();
    setIncidentsByHood(format(response));
    return response.map((incident) => {
      return {lat: incident.lat, lng: incident.lon};
    });
  });

  console.log(incidentsByHood);
  return points ? (
    <>
      <HeatMapChart data={points} />
      <HeatMapTable data={incidentsByHood} />
    </>
  ) : (
    <CircularProgress />
  );
};
