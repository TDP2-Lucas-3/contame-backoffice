import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';
import {authToken} from '../index';

export const Home = withRouter((props) => {
  console.log(authToken);
  return (
    <Container>
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
