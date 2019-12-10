import React, { useRef } from "react";
import dotenv from "dotenv";
import propTypes from "prop-types";
import styled from "styled-components";
import CurrencyIcon from "../icon/currency";
import Select from "../select";
import socket from "../../service/socket";
import { add_renter } from "../../redux/actions/renters";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
dotenv.config();

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 100px;
`;

const Wrap = styled.div`
  max-width: 400px;
  background: white;
  padding: 1rem;
  border-radius: 3px;
`;

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ViewRent(props) {
  let history = useHistory();
  const time = useRef(null);
  console.log(props.value);
  const send = () => {
    const date = new Date();
    const data = {
      time: parseInt(time.current.value),
      mentor: props.value,
      user: props.user,
      current: Date.parse(date),
      type: "user",
      accept: null,
      message: []
    };
    console.log(data);
    socket.emit("connect-mentor", data);
    socket.on("create-room", room => {
      data.room = room;
      props.add_renter(data);
      history.push("/contract");
    });
  };

  const item = props.value;
  return (
    <Root>
      <Wrap>
        <div className="row justify-content-between no-gutters my-2">
          <div className="col-5 pr-2">
            <Image
              className=""
              src={process.env.REACT_APP_IMAGE_SERVER + item.avatar}
              alt="Hình gia sư"
            />
          </div>
          <div className="col-7 d-flex flex-column">
            <p className="h5">
              <b>{props.value.name} </b>
            </p>
            <p>
              <span> Chi phí: </span> <b> {props.value.cost} </b>
              <span className="svg svg-fill-main">
                <CurrencyIcon />
              </span>
            </p>
            <div>
              <Select
                ref={time}
                placeholder="Chọn thời gian"
                option={[
                  { value: 1, name: "1 giờ " },
                  { value: 2, name: "2 giờ " },
                  { value: 3, name: "3 giờ " }
                ]}
              />
            </div>
          </div>
        </div>
        <div className="d-flex no-gutters my-2"></div>
        <div className="row no-gutters my-2">
          <div className="col-12 text-right">
            <button
              onClick={props.closePopup}
              className="btn mt-3 btn-secondary mr-2 btn-sm">
              Hủy
            </button>
            <button
              onClick={send}
              className="btn mt-3 btn-success btn-sm shadow-sm">
              Thuê gia sư
            </button>
          </div>
        </div>
      </Wrap>
    </Root>
  );
}

ViewRent.propTypes = {
  onChange: propTypes.func,
  value: propTypes.object
};

const mapState = state => ({ mentor: state.mentor, user: state.auth });
const mapAction = dispatch => ({
  add_renter: payload => dispatch(add_renter(payload))
});

export default connect(
  mapState,
  mapAction
)(ViewRent);
