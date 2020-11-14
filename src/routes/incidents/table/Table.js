import React, {useState, useEffect, useRef} from 'react';
import MaterialTable from 'material-table';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Container} from 'react-bootstrap';
import {useStyles} from './Styles';
import {columns, options, localization} from './data';
import {HoodFilter} from './filter/hoodFilter/HoodFilter';
import './Styles.css';

const Table = (props) => {
  const classes = useStyles();
  const [filteredData, setFiltered] = useState(null);
  const [filters, setFilters] = useState([]);

  const filterData = (hoodsFilter, data) => {
    const hoods = hoodsFilter.map((filter) => filter.label);
    return data.filter((incident) => {
      return hoods.includes(incident.hood);
    });
  };

  const handleChange = (newVal) => {
    setFilters(newVal);
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    (async () => {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }
      filters.length > 0
        ? setFiltered(filterData(filters, props.data))
        : setFiltered(props.data);
    })();
  }, [filters, props.data]);

  return (
    <div>
      {!props.data ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <Container>
          <Container className="hood-filter">
            <HoodFilter handleChange={handleChange} />
          </Container>

          <Container className="table">
            <MaterialTable
              title=""
              data={!filteredData ? props.data : filteredData}
              columns={columns}
              options={options}
              localization={localization}
            />
          </Container>
        </Container>
      )}
    </div>
  );
};

export {Table};
