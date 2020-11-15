import React from 'react';
import Select, {components} from 'react-select';

export const Filter = (props) => {
  const ValueContainer = ({children, getValue, ...props}) => {
    let values = getValue();
    let valueLabel = '';

    if (values.length > 0)
      valueLabel += props.selectProps.getOptionLabel(values[0]);
    if (values.length > 1) valueLabel += ` y ${values.length - 1} más`;

    // Keep standard placeholder and input from react-select
    let childsToRender = React.Children.toArray(children).filter(
      (child) =>
        ['Input', 'DummyInput', 'Placeholder'].indexOf(child.type.name) >= 0,
    );

    return (
      <components.ValueContainer {...props}>
        {!props.selectProps.inputValue && valueLabel}
        {childsToRender}
      </components.ValueContainer>
    );
  };

  const items = props.options.map((option) => ({
    label: option,
    value: option,
  }));
  return (
    <Select
      isMulti
      options={items}
      placeholder={props.placeholder}
      closeMenuOnSelect={false}
      hideSelectedOptions={true}
      noOptionsMessage={() => 'No hay más filtros'}
      onChange={props.handleChange}
      components={{
        ValueContainer,
      }}
    />
  );
};
