import React from "react";
import styled from "styled-components";
import "./index.sass";

const Button = styled.button`
  padding: 8px 14px;
  border-radius: ${props => {
    if (props.type && props.type === "border") return "100px";
    else return "3px";
  }};
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: white;
  font-size: 14px;
  line-height: 16px;
`;
function ButtonComponent(props) {
  return <Button {...props}>{props.children}</Button>;
}

// ButtonComponent.propTypes = {
// }

export default ButtonComponent;
