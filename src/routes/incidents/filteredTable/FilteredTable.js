import {useEffect, useRef, useState} from 'react';
import {Table} from './table/Table';
import React from 'react';

export const FilteredTable = (props) => {
  const [filteredData, setFiltered] = useState(null);
  const [hoodFilters, setHoodFilters] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);

  const handleHoodFilterChange = (newVal) => {
    setHoodFilters(newVal);
  };

  const handleCategoryFilterChange = (newVal) => {
    setCategoryFilters(newVal);
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
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
    <Table
      data={props.data}
      filteredData={filteredData}
      handleHoodFilterChange={handleHoodFilterChange}
      handleCategoryFilterChange={handleCategoryFilterChange}
    />
  );
};
