import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import ErrorSystem from "../../service/errSystem";
import validation from "../../service/validation";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../redux/actions/auth";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: ""
    };
    // fetch( "http://mentorpoly.herokuapp.com/api/auth/google" ).then(data=> console.log(data))
  }
  onSucces = result => {
    const { email, googleId, imageUrl, name } = result.profileObj;
    const payload = {
      email: email,
      name,
      type: "google",
      id: googleId,
      image: imageUrl
    };
    this.props.loginGoogle(payload, (err, result) => {
      if (result) {
        this.props.history.push("/");
      }
    });
  };

  login = () => {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    let err = "";

    if (!validation(password, "password")) err = ErrorSystem("SYS003");
    if (!validation(email, "email")) err = ErrorSystem("SYS002");
    if (!email || !password) err = ErrorSystem("SYS001");

    if (!err) {
      this.props.login({ email, password }, (done, data) => {
        if (done) this.props.history.push("/");
      });
    } else {
      this.setState({ err });
    }
  };
  render() {
    return (
      <div className="container">
        <Wrap className="no-gutters">
          <div className="col-lg-7 text-center">
            <img
              src="https://portal.lotuscdn.vn/lotus/originals/img-box-apply.png"
              alt="trang login"
            />
          </div>
          <div className="col-lg-5 bg-white box-shadow">
            <div className="shadow-sm p-3 ">
              <div className="letter-spacing mb-0 "> ĐĂNG NHẬP </div>
            </div>
            <form className="h-100 p-5">
              <div className="action text-left mb-5">
                <GoogleLogin
                  className=""
                  clientId="376991531394-81r1k53vcks6s7fbtukauc4ves8lkosv.apps.googleusercontent.com"
                  onSuccess={this.onSucces}
                />
              </div>
              <div className="group-input">
                <label className="text-white px-2 bg-primary">
                  <small>Email</small>
                </label>
                <Input type="text" ref="email" />
              </div>
              <div className="group-input mt-3">
                <label className="text-white px-2 bg-primary">
                  <small>Password</small>
                </label>
                <Input type="password" ref="password" />
              </div>
              <div className="action text-right 3 mt-4">
                <Button
                  type="button"
                  className="button-main"
                  onClick={this.login}>
                  Đăng nhập
                </Button>
              </div>
              <div className="d-flex justify-content-between">
                <Link to="/register" className="pt-5 d-inline- block">
                  CHƯA CÓ TÀI KHOẢN
                </Link>
                <Link to="/forget" className="pt-5 d-inline- block">
                  QUÊN MẬT KHẨU ?
                </Link>
              </div>
            </form>
            {this.state.err && (
              <div className="bg-danger text-center text-white p-2">
                {this.state.err}
              </div>
            )}
          </div>
        </Wrap>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginGoogle: (payload, cb) => action.login_by_google(payload, cb)(dispatch),
  login: (payload, cb) => action.login(payload, cb)(dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Component);
