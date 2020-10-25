import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import {Sidebar} from '../components/Sidebar';

export const Home = withRouter((props) => {
  return (
    <Container>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
      <h1>¡Contame! Backoffice</h1>
      <div>
        <Button
          variant="contained"
          color={'primary'}
          onClick={() => props.history.push('/incidents/')}>
          Listado de incidencias
        </Button>
      </div>
    </Container>
  );
});
