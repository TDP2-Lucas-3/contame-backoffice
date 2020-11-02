import React from 'react';
import {MyMapComponent} from './map';

export const Map = (props) => {
  if (!props.lat || !props.lon) return null;
  return (
    <MyMapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{height: `100%`}} />}
      containerElement={<div style={{height: `250px`}} />}
      mapElement={<div style={{height: `100%`}} />}
      lat={props.lat}
      lng={props.lon}
    />
  );
};
