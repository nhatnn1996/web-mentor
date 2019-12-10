import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { reset_password } from "../../redux/actions/auth";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import logo from "../../assets/logo.png";
import validation from "../../service/validation";
// import { bindActionCreators } from 'redux'
function VerifySuccess(props) {
  const { code, email } = useParams();
  const [state, setState] = useState(false);
  const [success, setSuccess] = useState(false);
  const password = useRef("");
  const confirm = useRef("");
  const onSubmit = () => {
    const valuePassword = password.current.value;
    const valueConfirm = confirm.current.value;

    const conditionPassword = validation(valuePassword, "password");
    const conditionDuplicate = valuePassword === valueConfirm ? true : false;

    const cb = (done, data) => {
      if (done) setSuccess(true);
    };
    conditionPassword && conditionDuplicate
      ? reset_password({ code, email, password: password.current.value }, cb)
      : setState(true);
  };

  let content = !success ? (
    <>
      <div className=" mt-2 h5 text-center bg-white font-weight-light py-3">
        Đổi mật khẩu
      </div>
      {state && (
        <div className="alert-danger text-center py-2 ">
          Mật khẩu không hợp lệ
        </div>
      )}
      <div className="email text-center mt-2">{email}</div>
      <div className="mt-3">
        <label>Nhập mật khẩu mới</label>
        <Input ref={password} type="password" className="mb-3" />
        <label>Nhập lại</label>
        <Input ref={confirm} type="password" className="mb-3" />
      </div>
      <div className="text-center mt-3">
        <button onClick={onSubmit} className="btn btn-outline-info">
          Cập nhật mật khẩu
        </button>
      </div>
    </>
  ) : (
    <>
      <div className="alert-success text-center py-3 mt-4">
        <i className="fa fa-check-circle mr-3" aria-hidden="true"></i>
        Cập nhật thành công
      </div>
      <div className="text-center mt-3">
        <Link to="/login" className="btn btn-outline-info">
          Đến trang đăng nhập
        </Link>
      </div>
    </>
  );

  return (
    <div
      className="verify w-100 d-flex align-items-center"
      style={{ height: "100vh" }}>
      <div className="w-100">
        <div className="row justify-content-center">
          <div className="col-md-3 shadow rounded p-5">
            <div className="text-center">
              <img src={logo} style={{ width: 100 }} alt="logo" />
            </div>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifySuccess;
