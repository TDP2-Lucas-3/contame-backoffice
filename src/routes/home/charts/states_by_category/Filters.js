import {HoodFilter} from './HoodFilter';
import {Row, Col} from 'reactstrap';
import React from 'react';
import {DateFilter} from './DateFilter';

export const ALL_HOODS = 'Todos los Barrios';

export const Filters = (props) => {
  return (
    <Row style={{marginBottom: 20}}>
      <Col style={{marginTop: 20}}>
        <HoodFilter hoods={props.hoods} onChange={props.onHoodChange} />
      </Col>
      <Col>
        <DateFilter label={'Fecha apertura desde'} />
      </Col>
      <Col>
        <DateFilter label={'Fecha apertura hasta'} />
      </Col>
    </Row>
  );
};
