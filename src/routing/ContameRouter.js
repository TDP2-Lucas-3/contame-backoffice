import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Home} from '../routes/Home';
import {Incidents, IncidentDetail} from '../routes/Incidents';
import {Users} from '../routes/Users';
import React from 'react';
import {Sidebar} from '../root/sidebar/Sidebar';
import {Header} from '../root/header/Header';
import {Login} from '../routes/Login';

function ContameRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/users'}>
          <Sidebar />
          <Header />
          <Users />
        </Route>

        <Route exact path={'/incidents'}>
          <Sidebar />
          <Header />
          <Incidents />
        </Route>

        <Route exact path={'/incidents/:id'} component={IncidentDetail} />

        <Route exact path={'/login'}>
          <Login />
        </Route>

        <Route exact path={'/'}>
          <Sidebar />
          <Header />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {ContameRouter};
