import React from 'react';
import {GoogleMap, Marker, withGoogleMap} from 'react-google-maps';

export const MyMapComponent = withGoogleMap(() => (
  <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}>
    {<Marker position={{lat: -34.397, lng: 150.644}} />}
  </GoogleMap>
));
