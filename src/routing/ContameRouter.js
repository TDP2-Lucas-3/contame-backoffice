import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from '../routes/Home';
import {Incidents, IncidentDetail} from '../routes/Incidents';
import {Users} from '../routes/Users';
import React from 'react';
import {Sidebar} from '../root/sidebar/Sidebar';
import {Header} from '../root/header/Header';

function ContameRouter() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Switch>
        <Route exact path={'/users'}>
          <Users />
        </Route>

        <Route exact path={'/incidents'}>
          <Incidents />
        </Route>

        <Route exact path={'/incidents/1'}>
          <IncidentDetail id={1} />
        </Route>

        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {ContameRouter};
