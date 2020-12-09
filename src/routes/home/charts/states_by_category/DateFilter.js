import React, {useState} from 'react';
import {DatePicker} from '@material-ui/pickers';

export const DateFilter = (props) => {
  const [date, setDate] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <DatePicker
      variant="inline"
      label={props.label}
      value={date}
      onChange={handleDateChange}
    />
  );
};
