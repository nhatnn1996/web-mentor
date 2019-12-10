import React, { useState } from "react";
import logo from "./logo.png";
import { useHistory } from "react-router-dom";
import { verify_again } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import "./index.sass";
// import { bindActionCreators } from 'redux'
function Verify(props) {
  const [btn, setBtn] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const sendMail = () => {
    verify_again();
    setBtn(true);
  };
  const comback = () => {
    localStorage.removeItem("auth");
    dispatch({ type: "CLEAR_AUTH", payload: null });
    history.push("/");
  };
  return (
    <div
      className="verify w-100 d-flex align-items-center"
      style={{ height: "100vh" }}>
      <div className="w-100">
        <div className="row justify-content-center">
          <div className="col-md-5 p-5 text-center">
            <img src={logo} style={{ width: 300 }} alt="logo" />
            <div className="text-center mt-2">
              <span className=" mt-2 h2 px-4 rounded bg-white text-center">
                Vui lòng kiểm tra Email
              </span>
              <p
                className="mt-3 font-weight-light h5 px-4 rounded bg-white text-center "
                style={{ lineHeight: "2rem" }}>
                Vui lòng kiểm tra hòm thư và xát nhận. Ấn vào liên kết để xát
                thực tài khoản email
              </p>
              <span className="mt-5 h5 px-4 rounded bg-white text-center">
                Nếu không thấy mail hãy gởi lại
              </span>
              <p className=" d-flex justify-content-center mt-3">
                {!btn && (
                  <>
                    <button
                      onClick={comback}
                      className="btn  btn-outline-secondary mx-3">
                      Quay lại
                    </button>
                    <button
                      onClick={sendMail}
                      className="btn  btn-outline-info mx-3">
                      Gởi lại email
                    </button>
                  </>
                )}

                {btn && <span> Email đã được gởi</span>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Verify;
