import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import {Sidebar} from '../root/sidebar/Sidebar';
import {Header} from '../root/header/Header';

export const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === 0 ? (
          <>
            <Sidebar />
            <Header />
            <Component {...props} />
          </>
        ) : (
          <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )
      }
    />
  );
};
