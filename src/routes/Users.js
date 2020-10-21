import React, {useState, useEffect} from 'react';
import {Table} from './incidents/Table';
import {withRouter} from 'react-router-dom';
import Container from '@material-ui/core/Container';

export const Users = withRouter((props) => {
  return (
    <Container>
      <h1>¡Usuarios!</h1>
    </Container>
  );
});
