import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Home} from '../routes/Home';
import {Incidents, IncidentDetail} from '../routes/Incidents';
import {Users} from '../routes/Users';
import React from 'react';
import {Sidebar} from '../root/sidebar/Sidebar';
import {Header} from '../root/header/Header';
import {Login} from '../routes/Login';
import {PrivateRoute} from './PrivateRoute';
import {useSelector} from 'react-redux';

function ContameRouter() {
  const authed = useSelector((state) => state.auth.status);
  return (
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Switch>
        <PrivateRoute authed={authed} exact path={'/users'} component={Users} />
        <PrivateRoute
          authed={authed}
          exact
          path={'/incidents'}
          component={Incidents}
        />
        <PrivateRoute
          authed={authed}
          exact
          path={'/incidents/:id'}
          component={IncidentDetail}
        />

        <Route exact path={'/login'}>
          <Login />
        </Route>

        <PrivateRoute authed={authed} exact path={'/'} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export {ContameRouter};
