import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Select = styled.select`
  border-radius: 3px;
  border: none;
  background: white;
  padding: 7px 16px;
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  border: 1px solid #dee2e6;
`;
const Option = styled.option`
  border: none;
  background: rgba(0, 0, 0, 0.06);
  outline: none;
`;

const SelectComponent = React.forwardRef((props, ref) => {
  const option = props.option;
  return (
    <Select ref={ref} {...props} defaultValue="0">
      <Option value="0" disabled>
        {props.placeholder ? props.placeholder : "Lựa chọn"}
      </Option>
      {option.map((element, index) => (
        <Option value={element._id} key={index}>
          {element.name}
        </Option>
      ))}
    </Select>
  );
});

SelectComponent.propTypes = {
  option: propTypes.array
};

export default SelectComponent;
