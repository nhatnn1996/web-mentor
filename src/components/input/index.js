import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const ComponentInput = styled.input`
  border-radius: 3px;
  border: none;
  background: white;
  padding: 7px 16px;
  width: 100%;
  border: 1px solid #dee2e6;
`;

const Input = React.forwardRef((props, ref) => (
  <ComponentInput ref={ref} {...props} />
));

Input.propTypes = {
  children: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
  type: propTypes.string
};

export default Input;
