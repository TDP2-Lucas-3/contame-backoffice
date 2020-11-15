import {Filter} from '../Filter';
import {hoods} from './data';
import React from 'react';

export const HoodFilter = (props) => {
  const getHoods = (data) => {
    const hoods = data
      .map((incident) => incident.hood)
      .filter((hood) => hood !== null);

    const filterHoods = [];
    hoods.forEach((hood) => {
      if (!filterHoods.includes(hood)) filterHoods.push(hood);
    });
    return hoods;
  };

  return (
    <Filter
      options={getHoods(props.data)}
      placeholder={'Barrios'}
      handleChange={props.handleChange}
    />
  );
};
