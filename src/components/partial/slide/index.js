import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../icon/home";
import RandIcon from "../../icon/rank";
import HistoryIcon from "../../icon/history";
import InfoIcon from "../../icon/info";
import AppleIcon from "../../icon/apple";
import PlayIcon from "../../icon/play";
import ProfileIcon from "../../icon/profile";
import "./style.sass";
function mapStateToProps(state) {
  return { user: state.auth };
}
class index extends Component {
  render() {
    return (
      <div className="slide d-flex flex-column">
        <div className="slide-bar">
          <ul className="slide-main">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                <HomeIcon /> Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/hi" activeClassName="active" exact>
                <RandIcon /> Xếp hạng
              </NavLink>
            </li>
            <li>
              <NavLink to="/history" activeClassName="active" exact>
                <HistoryIcon /> Lịch sử
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active" exact>
                <ProfileIcon /> Cá nhân
              </NavLink>
            </li>
          </ul>
          <ul className="more">
            <li>
              <NavLink to="/about-us" activeClassName="active" exact>
                <InfoIcon /> Về chúng tôi
              </NavLink>
            </li>
            <li>
              <NavLink to="/qwe" activeClassName="active" exact>
                <InfoIcon /> Hỗ trợ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="info mt-auto">
          <div className="info-item">
            <span className="svg">
              <AppleIcon />
            </span>
            AppleStores
          </div>
          <div className="info-item">
            <span className="svg">
              <PlayIcon />
            </span>
            PlayStore
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(index);
