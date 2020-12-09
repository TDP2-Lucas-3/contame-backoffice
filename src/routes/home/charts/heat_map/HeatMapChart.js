import React from 'react';

import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer';

const InnerHeatMapChart = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: -34.6037, lng: -58.3816}}>
        <HeatmapLayer
          data={props.data.map(
            (x) => new window.google.maps.LatLng(x.lat, x.lng),
          )}
          options={{
            opacity: 1,
            maxIntensity: 25,
          }}
        />
      </GoogleMap>
    );
  }),
);

export const HeatMapChart = (props) => (
  <InnerHeatMapChart
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=visualization`}
    loadingElement={<div style={{height: `100%`}} />}
    containerElement={<div style={{height: `450px`}} />}
    mapElement={<div style={{height: `100%`}} />}
    {...props}
  />
);
