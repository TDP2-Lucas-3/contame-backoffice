import {Filter} from '../Filter';
import React from 'react';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../../../services/Resources';

export const CategoryFilter = (props) => {
  const resources = useSelector((state) => state.auth.resources);
  const categories = useGetResource(async () =>
    (await resources.categories()).map((c) => c.value),
  );

  return (
    <Filter
      options={categories || []}
      placeholder={'Categorías'}
      handleChange={props.handleChange}
    />
  );
};
