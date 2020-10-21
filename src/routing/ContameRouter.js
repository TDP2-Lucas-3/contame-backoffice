import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from '../routes/Home';
import {Incidents} from '../routes/Incidents';
import {Users} from '../routes/Users';
import React from 'react';

function ContameRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/users'}>
          <Users />
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
