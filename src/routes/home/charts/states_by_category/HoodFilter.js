import {Select} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React, {useState} from 'react';
import {ALL_HOODS} from './Filters';

export const HoodFilter = (props) => {
  const [selectedHood, setSelectedHood] = useState(ALL_HOODS);

  const onHoodChange = (hood) => {
    setSelectedHood(hood);
    props.onChange(hood);
  };
  return (
    <Select
      labelId="hood-select"
      value={selectedHood}
      defaultValue={ALL_HOODS}
      onChange={(e) => onHoodChange(e.target.value)}>
      <MenuItem value={ALL_HOODS}>{ALL_HOODS}</MenuItem>
      {props.hoods.map((hood) => (
        <MenuItem key={hood} value={hood}>
          {hood}
        </MenuItem>
      ))}
    </Select>
  );
};
