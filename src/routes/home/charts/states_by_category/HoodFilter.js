import {Col, Row} from 'react-bootstrap';
import {Select} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import {ALL_HOODS} from './Filters';

export const HoodFilter = (props) => {
  return (
    <Select
      labelId="hood-select"
      value={props.selectedHood}
      defaultValue={ALL_HOODS}
      onChange={(e) => props.onChange(e.target.value)}>
      <MenuItem value={ALL_HOODS}>{ALL_HOODS}</MenuItem>
      {props.hoods.map((hood) => (
        <MenuItem key={hood} value={hood}>
          {hood}
        </MenuItem>
      ))}
    </Select>
  );
};
