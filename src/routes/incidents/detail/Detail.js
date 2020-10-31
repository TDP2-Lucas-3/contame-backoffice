import './Styles.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import '../table/Styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from '../table/Styles';
import {Description} from './description/Description';

export const Detail = (props) => {
  const classes = useStyles();
  return (
    <div className="box">
      <label className="header-text">Detalle de incidencia</label>
      {!props.data ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <Container>
          <h1 className="title">{props.data.title}</h1>
          <Description data={props.data.description} />
        </Container>
      )}
    </div>
  );
};
