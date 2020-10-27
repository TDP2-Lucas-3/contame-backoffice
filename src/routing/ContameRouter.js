import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from '../routes/Home';
import {Incidents} from '../routes/Incidents';
import React from 'react';
import {Sidebar} from '../root/sidebar/Sidebar';
import {Header} from '../root/header/Header';

function ContameRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Switch>
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
