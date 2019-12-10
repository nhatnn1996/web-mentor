import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Wrap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 1);
  z-index: 10000;
  animation: 1s fadeOut;
  animation-fill-mode: both;
`;

function Loading(props) {
  const [status, setStatus] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setStatus(false);
    }, 1000);
  });
  return <Wrap className={status ? "" : "d-none"}></Wrap>;
}
Loading.propTypes = {
  loading: propTypes.bool
};

export default Loading;
