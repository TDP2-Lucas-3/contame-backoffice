import './Styles.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import '../table/Styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from '../table/Styles';
import {Description} from './description/Description';
import {InfoBox} from './infoBox/InfoBox';
import Moment from 'moment';
import {IncidentCarousel} from './carousel/Carousel';
import {Map} from './map/MapWrapper';

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
          <div className="map">
            <Map
              lat={parseFloat(props.data.lat)}
              lon={parseFloat(props.data.lon)}
            />
          </div>
          <IncidentCarousel images={props.data.images} />
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
