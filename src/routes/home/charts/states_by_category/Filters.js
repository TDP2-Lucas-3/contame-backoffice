import {HoodFilter} from './HoodFilter';
import {Row, Col} from 'reactstrap';
import React, {useState} from 'react';
import {DateFilter} from './DateFilter';

export const ALL_HOODS = 'Todos los Barrios';

export const Filters = (props) => {
  const [selectedHood, setSelectedHood] = useState(ALL_HOODS);

  const onHoodChange = (hood) => {
    setSelectedHood(hood);
    props.onHoodChange(hood);
  };
  return (
    <Row>
      <Col>
        <HoodFilter
          hoods={props.hoods}
          onChange={onHoodChange}
          selectedHood={selectedHood}
        />
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
