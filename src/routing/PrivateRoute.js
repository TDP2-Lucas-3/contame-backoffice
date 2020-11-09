import {Route, Redirect} from 'react-router-dom';
import React from 'react';

export const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === 0 ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )
      }
    />
  );
};
