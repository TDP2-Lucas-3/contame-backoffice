import React from 'react';
import Select from 'react-select';

export const Filter = (props) => {
  const items = props.options.map((option) => ({
    label: option,
    value: option,
  }));

  const customStyles = {
    valueContainer: (base) => ({
      ...base,
      textOverflow: 'ellipsis',
      maxWidth: '90%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      display: 'initial',
      fontSize: 10,
    }),
    menu: (base) => ({
      ...base,
      fontSize: 10,
    }),
  };

  const multiValueContainer = ({selectProps, data}) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex((selected) => selected.label === label);
    const isFirstSelected = index === 0;
    const labelPrefix =
      isFirstSelected && allSelected.length > 1
        ? ` (${allSelected.length})`
        : '';
    const labelSuffix = isFirstSelected ? '' : ', ';
    return `${labelPrefix} ${label}${labelSuffix}`;
  };

  return (
    <Select
      styles={customStyles}
      isMulti
      options={items}
      placeholder={props.placeholder}
      hideSelectedOptions={false}
      noOptionsMessage={() => 'No hay más filtros'}
      onChange={props.handleChange}
      components={{
        MultiValueContainer: multiValueContainer,
      }}
    />
  );
};
