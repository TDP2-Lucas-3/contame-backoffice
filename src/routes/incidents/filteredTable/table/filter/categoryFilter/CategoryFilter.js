import {Filter} from '../Filter';
import React from 'react';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../../../services/Resources';

export const CategoryFilter = (props) => {
  const resources = useSelector((state) => state.auth.resources);
  const categories = useGetResource(() => resources.categories());

  return (
    <Filter
      options={!categories ? [] : categories.map((category) => category.name)}
      placeholder={'Categorias'}
      handleChange={props.handleChange}
    />
  );
};
