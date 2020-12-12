import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../services/Resources';
import {HeatMapChart} from './HeatMapChart';
import CircularProgress from '@material-ui/core/CircularProgress';
import {CategoryFilter} from './CategoryFilter';

const ALL_CATEGORIES = 'Todas las Categorías';

export const HeatMap = () => {
  const resources = useSelector((state) => state.auth.resources);

  const [points, setPoints] = useState(null);
  useGetResource(() => filterByCategory());

  const [categories, setCategories] = useState(null);
  useGetResource(async () => {
    const categories = await resources.categories();
    setCategories(categories);
  });
  const [selectedCategory, setCategory] = useState(ALL_CATEGORIES);

  const filterByCategory = async (category) => {
    setPoints(null);
    if (category === ALL_CATEGORIES) {
      category = null;
    }

    const response = await resources.mapData(category);
    setPoints(
      response.incidents.map((incident) => {
        return {lat: incident.lat, lng: incident.lon};
      }),
    );
  };

  const onChange = async (category) => {
    setCategory(category);
    await filterByCategory(category);
  };

  return categories ? (
    <>
      <CategoryFilter
        selectedCategory={selectedCategory}
        categories={categories}
        onChange={onChange}
      />
      {points ? <HeatMapChart data={points} /> : <CircularProgress />}
    </>
  ) : (
    <CircularProgress />
  );
};
