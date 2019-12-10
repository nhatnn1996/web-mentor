import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Menu extends Component {
  render() {
    return (
      <div className="menu shadow-sm h-100">
        <div className="menu-bar h-100">
          <ul
            className="list bg-white h-100 rounded overflow-hidden "
            style={{ minHeight: "500px" }}>
            <li className="text-secondary font-weight-bold px-3 mt-4 text-uppercase">
              Thay đổi
            </li>
            <li>
              <NavLink
                to="/edit"
                style={style}
                className="d-block px-3 py-2"
                activeClassName="bg-fill-main text-white font-weight-bold"
                exact>
                Cập nhật chung
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/edit/password"
                style={style}
                className="d-block px-3 py-2"
                activeClassName="bg-fill-main text-white font-weight-bold"
                exact>
                Đổi mật khẩu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/edit/mentor"
                style={style}
                className="d-block px-3 py-2"
                activeClassName="bg-fill-main text-white font-weight-bold"
                exact>
                Cập nhật Mentor
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Menu;

const style = { color: "grey" };
