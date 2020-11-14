import {Filter} from '../Filter';
import {hoods} from './data';
import React from 'react';

export const HoodFilter = (props) => {
  return (
    <Filter
      options={hoods}
      placeholder={'Barrios'}
      handleChange={props.handleChange}
    />
  );
};
