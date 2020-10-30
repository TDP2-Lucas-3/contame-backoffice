import React from 'react';
import {MyMapComponent} from './map';

export function MapExample() {
  return (
    <MyMapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{height: `100%`}} />}
      containerElement={<div style={{height: `1000px`}} />}
      mapElement={<div style={{height: `100%`}} />}
    />
  );
}
