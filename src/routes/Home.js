import React from 'react';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';
import './home/Home.css';

export const Home = withRouter((props) => {
  return (
    <Container>
      <h1 className="welcomeMessage">¡Contame! Backoffice</h1>
    </Container>
  );
});
