import './Styles.css';
import React from 'react';
import Container from '@material-ui/core/Container';

export const Detail = (props) => {
  !props.data ? console.log('kjhkk') : console.log(props.data.title);
  return (
    <Container>
      <h1 className="title">Detalle de incidencia !</h1>
    </Container>
  );
};
