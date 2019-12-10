import React from "react";
import CloseIcon from "../icon/close";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import proptype from "prop-types";


const Wrap = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
`;
const BoxMessage = styled.div`
  min-width: 400px;
  background: #f3f3f3;
  border-radius: 3px;
  box-shadow: 2px 2px 24px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1000;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: thin solid grey;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
`;

const Box = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h6`
  margin: 0;
  font-weight: 300;
  text-transfrom: uppercase;
  line-height: 30px;
  font-size: 16px;
`;

// const Footer = styled.div`
//   padding: 2px;d
// `;

const Popup = ({ show, close, children, title }) => {
  const transitions = useTransition(show, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <animated.div config={{duration: 5000}}  key={key} style={props}>
          <Wrap>
            <BoxMessage>
              <Header>
                <Title> {title} </Title>
                <Box onClick={close}>
                  <CloseIcon />
                </Box>
              </Header>
              <Content>{children}</Content>
            </BoxMessage>
          </Wrap>
        </animated.div>
      )
  );
};

Popup.propTypes = {
  title: proptype.string,
  children: proptype.object
};

export default Popup;
