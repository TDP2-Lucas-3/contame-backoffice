import React, {useState} from 'react';
import {DatePicker} from '@material-ui/pickers';
import {Row} from 'reactstrap';

export const DateFilter = (props) => {
  const [date, setDate] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    props.onDateChange(newDate.format('YYYY-MM-DD'));
  };

  const clean = () => {
    if (date === null) {
      return;
    }

    setDate(null);
    props.onDateChange(null);
  };

  return (
    <Row>
      <DatePicker
        disableToolbar
        variant="inline"
        format="YYYY-MM-DD"
        autoOk={true}
        label={props.label}
        value={date}
        onChange={handleDateChange}
      />
      <p style={{margin: 20}} className={'clean-filters'} onClick={clean}>
        Limpiar
      </p>
    </Row>
  );
};
