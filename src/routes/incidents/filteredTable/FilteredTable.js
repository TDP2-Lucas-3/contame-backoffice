import {useEffect, useRef, useState} from 'react';
import {Table} from './table/Table';
import React from 'react';

const filterFunction = (array, key) => {
  if (array.length > 0) {
    return array.includes(key);
  }
  return true;
};

export const FilteredTable = (props) => {
  const [filteredData, setFiltered] = useState(null);
  const [hoodFilters, setHoodFilters] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [publicStateFilters, setPublicStateFilters] = useState([]);
  const handleHoodFilterChange = (newVal) => {
    setHoodFilters(newVal);
  };

  const handleCategoryFilterChange = (newVal) => {
    setCategoryFilters(newVal);
  };

  const handlePublicStateFilterChange = (newVal) => {
    setPublicStateFilters(newVal);
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    const filterData = () => {
      const hoods = hoodFilters.map((filter) => filter.label);
      const categories = categoryFilters.map((filter) => filter.label);
      const publicStates = publicStateFilters.map((filter) => filter.label);

      return props.data
        .filter((incident) => filterFunction(hoods, incident.hood))
        .filter((incident) => filterFunction(categories, incident.category))
        .filter((incident) => filterFunction(publicStates, incident.state));
    };
    (async () => {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }
      setFiltered(filterData());
    })();
  }, [hoodFilters, categoryFilters, publicStateFilters, props.data]);

  return (
    <Table
      data={props.data}
      filteredData={filteredData}
      handleHoodFilterChange={handleHoodFilterChange}
      handleCategoryFilterChange={handleCategoryFilterChange}
      handlePublicStateFilterChange={handlePublicStateFilterChange}
    />
  );
};
