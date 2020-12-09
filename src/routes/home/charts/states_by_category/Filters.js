import {HoodFilter} from './HoodFilter';
import {Row, Col} from 'reactstrap';
import React, {useState} from 'react';

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
    </Row>
  );
};
