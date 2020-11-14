import React, {useState, useEffect, useRef} from 'react';
import MaterialTable from 'material-table';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Container} from 'react-bootstrap';
import {useStyles} from './Styles';
import {columns, options, localization} from './data';
import {HoodFilter} from './filter/hoodFilter/HoodFilter';
import {CategoryFilter} from './filter/categoryFilter/CategoryFilter';
import './Styles.css';

const Table = (props) => {
  const classes = useStyles();
  const [filteredData, setFiltered] = useState(null);
  const [hoodFilters, setHoodFilters] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);

  const filterData = (hoodFilter, categoryFilter, data) => {
    const hoods = hoodFilter.map((filter) => filter.label);
    const categories = categoryFilter.map((filter) => filter.label);

    return data.filter((incident) => {
      if (hoodFilters.length > 0 && categoryFilters.length > 0) {
        return (
          hoods.includes(incident.hood) &&
          categories.includes(incident.category.name)
        );
      }
      if (hoodFilters.length > 0) {
        return hoods.includes(incident.hood);
      }
      return categories.includes(incident.category.name);
    });
  };

  const handleHoodFilterChange = (newVal) => {
    setHoodFilters(newVal);
  };

  const handleCategoryFilterChange = (newVal) => {
    setCategoryFilters(newVal);
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    (async () => {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }
      hoodFilters.length > 0 || categoryFilters.length > 0
        ? setFiltered(filterData(hoodFilters, categoryFilters, props.data))
        : setFiltered(props.data);
    })();
  }, [hoodFilters, categoryFilters, props.data]);

  return (
    <div>
      {!props.data ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <Container>
          <Container className="hood-filter">
            <HoodFilter handleChange={handleHoodFilterChange} />
          </Container>
          <Container className="category-filter">
            <CategoryFilter handleChange={handleCategoryFilterChange} />
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
