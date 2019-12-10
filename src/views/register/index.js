import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import ErrorSystem from "../../service/errSystem";
import validation from "../../service/validation";
import * as action from "../../redux/actions/auth";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
class Component extends React.Component {
  constructor() {
    super();
    this.state = { err: "" };
  }
  register = () => {
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const confirm = this.refs.confirm.value;
    let err = "";
    if (password !== confirm) err = ErrorSystem("SYS007");
    if (!validation(password, "password")) err = ErrorSystem("SYS003");
    if (!validation(email, "email")) err = ErrorSystem("SYS002");
    if (!name || !email || !password || !confirm) err = ErrorSystem("SYS006");

    if (err) this.setState({ err });
    else {
      this.props.register({ email, name, password }, (done, code) => {
        console.log(done);
        if (done) this.props.history.push("/verify");
        if (code) {
          err = ErrorSystem(code);
          this.setState({ err });
        }
      });
    }
  };
  render() {
    return (
      <div className="container">
        <Wrap className="no-gutters">
          <div className="col-lg-7 text-center">
            <img
              src="https://portal.lotuscdn.vn/lotus/originals/img-box-apply.png"
              className=""
              alt=""
            />
          </div>
          <div className="col-lg-5 bg-white box-shadow">
            <div className="shadow-sm p-3 d-flex-align">
              <div className="letter-spacing mb-0 "> ĐĂNG KÝ </div>
            </div>
            <form className="h-100 p-5">
              <div className="group-input">
                <label className="text-white px-2 bg-primary">
                  <small>Họ và tên</small>
                </label>
                <Input type="text" ref="name" />
              </div>
              <div className="group-input mt-3">
                <label className="text-white px-2 bg-primary">
                  <small>Email</small>
                </label>
                <Input type="text" ref="email" />
              </div>
              <div className="group-input mt-3">
                <label className="text-white px-2 bg-primary">
                  <small>Mật khẩu</small>
                </label>
                <Input type="password" ref="password" />
              </div>
              <div className="group-input mt-3">
                <label className="text-white px-2 bg-primary">
                  <small>Nhập lại</small>
                </label>
                <Input type="password" ref="confirm" />
              </div>
              <div className="action text-right mt-4 3">
                <Button
                  onClick={this.register}
                  type="button"
                  className=" button-main">
                  Đăng ký
                </Button>
              </div>
              <Link to="/login" className="pt-5 d-block">
                ĐÃ CÓ TÀI KHOẢN
              </Link>
            </form>
            {this.state.err && (
              <div className="bg-danger text-center p-2 text-white">
                {this.state.err}
              </div>
            )}
          </div>
        </Wrap>
      </div>
    );
  }
}

const mapDispathToProps = dispatch =>
  bindActionCreators({ register: action.register }, dispatch);
export default connect(
  null,
  mapDispathToProps
)(Component);
