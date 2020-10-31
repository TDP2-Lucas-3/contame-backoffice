import './Styles.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import '../table/Styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from '../table/Styles';
import {Description} from './description/Description';
import {InfoBox} from './infoBox/InfoBox';
import Moment from 'moment';

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
          <InfoBox
            data={Moment(props.data.creationDate).format('DD/MM/YYYY')}
            header={'Creada'}
          />
        </Container>
      )}
    </div>
  );
};
