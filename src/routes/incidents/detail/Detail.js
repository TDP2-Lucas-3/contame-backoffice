import './Styles.css';
import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import '../filteredTable/table/Styles';
import {Description} from './description/Description';
import {InfoBox} from './infoBox/InfoBox';
import Moment from 'moment';
import {IncidentCarousel} from './carousel/Carousel';
import {Map} from './map/MapWrapper';
import {StateLabel} from './stateLabel/StateLabel';
import {ChangeStateModalContainer} from './changeStateModal/ChangeStateModalContainer';
import {CommentsContainer} from './commentBox/CommentsContainer';
import {SubcategoryLabel} from './subcategoryLabel/SubcategoryLabel';

export const Detail = (props) => {
  const {
    openPrivateModal,
    openPublicModal,
    closeDialog,
    modalVisible,
    privateModalVisible,
    refreshComments,
  } = props;

  const [publicState, setPublicState] = useState(props.data.state);
  const [privateState, setPrivateState] = useState(props.data.statePrivate);

  return (
    <Container>
      <h1 className="incident-title">{props.data.title}</h1>
      <StateLabel
        statePrivate={privateState}
        state={publicState}
        openPrivateModal={openPrivateModal}
        openPublicModal={openPublicModal}
      />
      <SubcategoryLabel
        category={props.data.category}
        content={props.data.subcategory}
      />
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
      <ChangeStateModalContainer
        modalVisible={modalVisible}
        closeDialog={closeDialog}
        id={props.data.id}
        initialPublicState={props.data.state}
        endpoint={'newState'}
        fetchStatesMethod={'publicStates'}
        title={'Modificar estado público'}
        label={'Estado público'}
        setStateLabel={setPublicState}
        refreshComments={refreshComments}
      />

      <ChangeStateModalContainer
        modalVisible={privateModalVisible}
        closeDialog={closeDialog}
        id={props.data.id}
        initialPublicState={props.data.statePrivate}
        endpoint={'newStatePrivate'}
        fetchStatesMethod={'privateStates'}
        title={'Modificar estado interno'}
        label={'Estado interno'}
        setStateLabel={setPrivateState}
        refreshComments={refreshComments}
      />
    </Container>
  );
};
