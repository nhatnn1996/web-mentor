import React, { useState, useRef } from "react";
import logo from "../../assets/logo.png";
import Input from "../../components/input";
import validation from "../../service/validation";
import { forget_password } from "../../redux/actions/auth";
// import { bindActionCreators } from 'redux'
function Verify(props) {
  const email = useRef("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const submit = () => {
    const value = email.current.value;
    if (validation(value, "email")) {
      const cb = (done, data) => {
        if (done) {
          setSuccess(true);
        }
      };
      forget_password(value, cb);
    } else {
      setError(true);
    }
  };
  if (!success)
    return (
      <div
        className="verify w-100 d-flex align-items-center"
        style={{ height: "100vh" }}>
        <div className="w-100">
          <div className="row justify-content-center">
            <div className="col-md-4 p-5 ">
              <img src={logo} style={{ width: 200 }} alt="logo" />
              <div className=" mt-3">
                <span className=" mt-2 h2 rounded bg-white ">
                  Quên mật khẩu ?
                </span>
                <p
                  className="mt-3 font-weight-light h6 rounded bg-white "
                  style={{ lineHeight: "2rem" }}>
                  Nhập địa chỉ email của bạn, chúng tôi sẽ gởi mã xát nhận đến
                  email của bạn. Vui lòng kiểm tra nhé.
                </p>
                {error && (
                  <div className="mt-3">
                    <i
                      className="fa fa-times-circle text-danger"
                      aria-hidden="true"></i>
                    <span className="ml-3 text-danger">
                      {" "}
                      Email không hợp lệ{" "}
                    </span>
                  </div>
                )}

                <Input ref={email} className=" mt-1 input" />
                <button onClick={submit} className="mt-3 btn btn-info px-5">
                  Gởi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div
        className="verify w-100 d-flex align-items-center"
        style={{ height: "100vh" }}>
        <div className="w-100">
          <div className="row justify-content-center">
            <div className="col-md-4 p-5 ">
              <img src={logo} style={{ width: 200 }} alt="logo" />
              <div className=" mt-3">
                <span className=" mt-2 h2 rounded bg-white ">
                  Vui lòng kiểm tra email
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Verify;
