import './Styles.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import '../filteredTable/table/Styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from '../filteredTable/table/Styles';
import {Description} from './description/Description';
import {InfoBox} from './infoBox/InfoBox';
import Moment from 'moment';
import {IncidentCarousel} from './carousel/Carousel';
import {Map} from './map/MapWrapper';
import {ReportedLabel} from './stateLabel/reported/ReportedLabel';
import {CommentsContainer} from './commentBox/CommentsContainer';

export const Detail = (props) => {
  const classes = useStyles();
  return (
    <div className="box">
      <label className="header-text">Detalle de incidencia</label>
      {!props.data || !props.comments ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <Container>
          <h1 className="incident-title">{props.data.title}</h1>
          <ReportedLabel state={props.data.state} />
          <div className="map">
            <Map
              lat={parseFloat(props.data.lat)}
              lon={parseFloat(props.data.lon)}
            />
          </div>
          <IncidentCarousel images={props.data.images} />
          <Description data={props.data.description} />
          <div className="creation-date">
            <InfoBox
              data={Moment(props.data.creationDate).format('DD/MM/YYYY')}
              header={'Creada'}
            />
          </div>
          <div className="update-date">
            <InfoBox
              data={Moment(props.data.updateDate).format('DD/MM/YYYY')}
              header={'Actualizada'}
            />
          </div>
          <div className="close-date">
            <InfoBox
              data={Moment(props.data.completeDate).format('DD/MM/YYYY')}
              header={'Cierre'}
            />
          </div>
          <CommentsContainer comments={props.comments} />
        </Container>
      )}
    </div>
  );
};
