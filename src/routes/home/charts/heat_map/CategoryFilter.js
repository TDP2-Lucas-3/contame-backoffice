import {Col, Row} from 'react-bootstrap';
import {Select} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
const ALL_CATEGORIES = 'Todas las Categorías';

export const CategoryFilter = (props) => {
  return (
    <Row>
      <Col
        sm={{
          offset: 9,
          size: 2,
        }}>
        <Select
          labelId="category-select"
          value={props.selectedCategory}
          defaultValue={'Categoría'}
          onChange={(e) => props.onChange(e.target.value)}>
          <MenuItem value={ALL_CATEGORIES}>{ALL_CATEGORIES}</MenuItem>
          {props.categories.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.value}
            </MenuItem>
          ))}
        </Select>
      </Col>
    </Row>
  );
};
