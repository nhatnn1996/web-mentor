import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { verify } from "../../redux/actions/auth";
import logo from "./logo.png";
import { Link } from "react-router-dom";
// import { bindActionCreators } from 'redux'
function VerifySuccess(props) {
  const { code } = useParams();
  const [state, setState] = useState(null);
  const id = props.user.id;
  useEffect(() => {
    if (props.user.active === false)
      props.verify({ code, id }, (done, reuslt) => {
        if (!done) {
          setState(false);
        } else {
          setState(true);
        }
      });
  });
  if (state === null) return null;
  else if (state === true)
    return (
      <div
        className="verify w-100 d-flex align-items-center"
        style={{ height: "100vh" }}>
        <div className="w-100">
          <div className="row justify-content-center">
            <div className="col-md-5 p-5 text-center">
              <img src={logo} style={{ width: 300 }} alt="logo" />
              <div className="text-center mt-2">
                <span className=" mt-2 h2 px-4 bg-white text-center">
                  Xát thực thành công
                </span>
                <p
                  className="mt-2 h5 px-4 font-weight-light text-center"
                  style={{ lineHeight: "2rem" }}>
                  Rất vui khi bạn đã trở thành một phần của PolyMentor. Nơi giao
                  lưu chia sẽ kiến thức cùng nhau phát triễn.
                </p>
                <p className=" d-flex justify-content-center mt-3">
                  {/* <button className="btn btn-success mx-3">Tiếp tục</button> */}
                  <Link to="/" className="btn btn-outline-secondary mx-3">
                    Đi đến trang chủ
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className="verify w-100 d-flex align-items-center"
        style={{ height: "100vh" }}>
        <div className="w-100">
          <div className="row justify-content-center">
            <div className="col-md-5 p-5 text-center">
              <img src={logo} style={{ width: 300 }} alt="logo" />
              <div className="text-center mt-2">
                <span className=" mt-2 h2 px-4 text-danger text-center">
                  Xát thực không thành công
                </span>
                <p
                  className="mt-2 h5 px-4 font-weight-light text-center"
                  style={{ lineHeight: "2rem" }}>
                  Mã đã hết hạng hoặc không đúng. Vui lòng kiểm tra lại email để
                  xát thực
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const mapActions = dispatch => bindActionCreators({ verify }, dispatch);
const mapState = state => ({
  user: state.auth
});

export default connect(
  mapState,
  mapActions
)(VerifySuccess);
