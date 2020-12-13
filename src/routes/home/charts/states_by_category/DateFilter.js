import React, {useState} from 'react';
import {DatePicker} from '@material-ui/pickers';

export const DateFilter = (props) => {
  const [date, setDate] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    props.onDateChange(newDate.format('YYYY-MM-DD'));
  };
  return (
    <DatePicker
      disableToolbar
      variant="inline"
      format="YYYY-MM-DD"
      label={props.label}
      value={date}
      onChange={handleDateChange}
    />
  );
};
