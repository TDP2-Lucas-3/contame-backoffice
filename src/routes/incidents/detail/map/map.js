import React from 'react';
import {GoogleMap, Marker, withGoogleMap} from 'react-google-maps';

export const MyMapComponent = withGoogleMap((props) => (
  <GoogleMap defaultZoom={16} defaultCenter={{lat: props.lat, lng: props.lng}}>
    {<Marker position={{lat: props.lat, lng: props.lng}} />}
  </GoogleMap>
));
