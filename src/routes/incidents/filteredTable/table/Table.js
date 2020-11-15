import React from 'react';
import MaterialTable from 'material-table';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Container} from 'react-bootstrap';
import {useStyles} from './Styles';
import {columns, options, localization} from './data';
import {HoodFilter} from './filter/hoodFilter/HoodFilter';
import {CategoryFilter} from './filter/categoryFilter/CategoryFilter';
import './Styles.css';

export const Table = (props) => {
  const classes = useStyles();
  return (
    <div>
      {!props.data ? (
        <CircularProgress className={classes.centered} />
      ) : (
        <Container>
          <Container className="hood-filter">
            <HoodFilter handleChange={props.handleHoodFilterChange} />
          </Container>
          <Container className="category-filter">
            <CategoryFilter handleChange={props.handleCategoryFilterChange} />
          </Container>

          <Container className="table">
            <MaterialTable
              title=""
              data={!props.filteredData ? props.data : props.filteredData}
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
