import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from '../routes/Home';
import {Incidents} from '../routes/Incidents';
import {Users} from '../routes/Users';
import React from 'react';
import {Sidebar} from '../root/sidebar/Sidebar';
import {Header} from '../root/header/Header';
import {MapExample} from '../incident_details/MapExample';

function ContameRouter() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Switch>
        <Route path={'/users'}>
          <Users />
        </Route>

        <Route path={'/map'}>
          <MapExample />
        </Route>

        <Route path={'/incidents'}>
          <Incidents />
        </Route>

        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {ContameRouter};
