import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';

export const Home = withRouter((props) => {
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
