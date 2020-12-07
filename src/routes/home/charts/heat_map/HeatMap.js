import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../services/Resources';
import {HeatMapChart} from './HeatMapChart';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Select} from '@material-ui/core';
import {Row, Col} from 'react-bootstrap';
import MenuItem from '@material-ui/core/MenuItem';

export const HeatMap = () => {
  const resources = useSelector((state) => state.auth.resources);

  const [points, setPoints] = useState(null);
  useGetResource(() => filterByCategory());

  const [categories, setCategories] = useState(null);
  useGetResource(async () => {
    const categories = await resources.categories();
    setCategories(categories);
  });
  const [selectedCategory, setCategory] = useState('Categoría');

  const filterByCategory = async (category) => {
    setPoints(null);
    const response = await resources.mapData(category);
    setPoints(
      response.incidents.map((incident) => {
        return {lat: incident.lat, lng: incident.lon};
      }),
    );
  };

  return points && categories ? (
    <>
      <Row>
        <Col
          sm={{
            offset: 9,
            size: 2,
          }}>
          <Select
            labelId="category-select"
            value={selectedCategory}
            defaultValue={'Categoría'}
            onChange={(e) => {
              setCategory(e.target.value);
              filterByCategory(e.target.value);
            }}>
            <MenuItem value={'Categoría'}>Categoría</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.value} value={category.value}>
                {category.value}
              </MenuItem>
            ))}
          </Select>
        </Col>
      </Row>
      <HeatMapChart data={points} />
    </>
  ) : (
    <CircularProgress />
  );
};
