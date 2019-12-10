import React from "react";
import propTypes from "prop-types";
import CurencyIcon from "../icon/currency";
import { useSpring, animated } from "react-spring";
import style from "styled-components";
import "./index.sass";
import dotenv from "dotenv";
dotenv.config();

const Name = style.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    font-size: 18px;
`;

function Mentor(props) {
  const { value } = props;
  const click = () => {
    props.getValue(value);
  };

  const style = useSpring({
    opacity: 1,
    transform: " translateY(0px)",
    from: { opacity: 0, transform: "translateY(-5px)" }
  });

  return (
    <animated.div  style={style} className="mentor" onClick={click}>
      <div className="mentor-detail">
        <div className="item-image">
          <img
            src={process.env.REACT_APP_HOST_MENTOR + value.avatar}
            className="border"
            alt="iamge"
          />
        </div>
        <div className="py-2">
          <Name>{value.name}</Name>
          <div className=" py-0 text-secondary">Phụ giảng</div>
          <div className="d-flex text-secondary py-1">
            <span className="svg svg-fill-main mr-3">
              {value.cost} <CurencyIcon />
            </span>
            <span>
              5
              <b>
                <i className="fa fa-star" aria-hidden="true"></i>
              </b>
            </span>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
Mentor.propTypes = {
  onClick: propTypes.func
};
export default Mentor;
