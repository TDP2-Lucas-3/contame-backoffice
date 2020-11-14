import {Filter} from '../Filter';
import {categories} from './data';
import React from 'react';

export const CategoryFilter = (props) => {
  return (
    <Filter
      options={categories}
      placeholder={'Categorias'}
      handleChange={props.handleChange}
    />
  );
};
