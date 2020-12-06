import React from 'react';
import {StackedBarChart} from './StackedBarChart';
import {useSelector} from 'react-redux';
import {useGetResource} from '../../../../services/Resources';
import CircularProgress from '@material-ui/core/CircularProgress';

const response = {
  data: [
    {
      name: 'Ingresado',
      categories: [
        {
          category: 'Limpieza',
          value: 2,
        },
        {
          category: 'Vía Pública',
          value: 5,
        },
        {
          category: 'Espacios Verdes y Arbolados',
          value: 1,
        },
        {
          category: 'Uso del Espacio Público',
          value: 3,
        },
        {
          category: 'Alumbrado Público',
          value: 10,
        },
        {
          category: 'Autos Abandonados',
          value: 2,
        },
      ],
    },
    {
      name: 'En proceso',
      categories: [
        // ...
      ],
    },
  ],
};

export const StatesByCategory = () => {
  const resources = useSelector((state) => state.auth.resources);
  const response = useGetResource(() => resources.stateData());
  return response ? (
    <StackedBarChart data={response.data} />
  ) : (
    <CircularProgress />
  );
};
