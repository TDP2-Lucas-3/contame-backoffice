import {HoodFilter} from './HoodFilter';
import {Row, Col} from 'reactstrap';
import React, {useState} from 'react';
import {DateFilter} from './DateFilter';
import {DatePicker} from "@material-ui/pickers";

export const ALL_HOODS = 'Todos los Barrios';

export const Filters = (props) => {
  const [selectedHood, setSelectedHood] = useState(ALL_HOODS);

  const onHoodChange = (hood) => {
    setSelectedHood(hood);
    props.onHoodChange(hood);
  };
  return (
    <Row style={{marginBottom: 20}}>
      <Col style={{marginTop: 20}}>
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
