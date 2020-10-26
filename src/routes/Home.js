import React from 'react';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';

export const Home = withRouter((props) => {
  return (
    <Container>
      <h1>¡Contame! Backoffice</h1>
    </Container>
  );
});
