import React, { Component } from "react";
import styled from "styled-components";
import CurrencyIcon from "../../icon/currency";
import RegisterIcon from "../../icon/register";
import socket from "../../../service/socket";
import Popup from "../../popup";
import Renters from "../../renters";
import logo from "./logo.png";
import Dropdown from "./dropdown";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as action from "../../../redux/actions/auth";
import * as renterActions from "../../../redux/actions/renters";
import "./style.sass";

const Wrap = styled.div`
  margin-left: 20px;
  position: relative;
  display: flex;
`;
const Notification = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f36f5a;
  margin-left: 4px;
`;
const Currency = styled.span`
  svg {
    fill: #f36f5a;
    margin-left: 3px;
  }
`;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadRenter: false,
      isRegister: false
    };
  }

  componentDidMount() {
    socket.emit("load", null);
  }

  closeLoadRenters = () => {
    this.setState({ loadRenter: false });
  };

  openLoadRenters = () => {
    this.setState({ loadRenter: true });
  };
  logout = () => {
    socket.emit("off-mentor", { id: this.props.user.id });
    this.props.logout_account((done, code) => {
      if (done) this.props.history.push("/");
    });
  };
  render() {
    let check = false;
    if (this.props.user) {
      if (this.props.user.name) check = true;
    }
    const { surplus, mentor } = this.props.user;
    let isMentor = true;
    if (!mentor) isMentor = false;

    return (
      <div className="header border-bottom">
        <div className="wrap">
          <div className="d-flex align-items-center px-3">
            <Link to="/" className="logo">
              <img src={logo} className="" alt="" />
            </Link>
            <div className="search">
              <div className="search-group">
                <input type="text" placeholder="Nhập dữ liệu tìm kiếm" />
                <i className="fa fa-search text-center" aria-hidden="true"></i>
              </div>
            </div>
            <div className="p-2  ml-3 rounded text-dark">
              {surplus}
              <Currency>
                <CurrencyIcon />
              </Currency>
            </div>
            <Link
              style={{ borderRadius: "100px" }}
              to="/contract"
              className="p-2 ml-3 shadow-sm px-3 text-dark d-flex align-items-center">
              {this.props.renters.length} yêu cầu
              {this.props.renters.length > 0 && <Notification />}
            </Link>

            {check && (
              <div className="ml-auto d-flex">
                {isMentor === false && (
                  <Link
                    to="/register-mentor"
                    className="p-2 shadow rounded text-dark">
                    <span className="svg mr-3">
                      <RegisterIcon />
                    </span>
                    Đăng ký gia sư
                  </Link>
                )}
                <Wrap>
                  <Dropdown info={this.props.user} logout={this.logout} />
                </Wrap>
                <Popup
                  show={this.state.loadRenter}
                  close={this.closeLoadRenters}>
                  <Renters closePopup={this.changePopup} />
                </Popup>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...action, ...renterActions }, dispatch);

function mapStateToProps(state) {
  return {
    user: state.auth,
    renters: state.renters,
    contract: state.contract
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
export default withRouter(component);
