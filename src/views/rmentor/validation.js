import React from "react";
const Validation = function(props) {
  const Message = function() {
    if (props.error === undefined) return null;
    else {
      if (props.error === "required") {
        return (
          <>
            <i
              className="fa fa-times-circle text-danger"
              aria-hidden="true"></i>
            <span className="ml-3 text-danger"> Không được để trống </span>
          </>
        );
      } else if (props.error === "invalid") {
        return (
          <>
            <i
              className="fa fa-times-circle text-danger"
              aria-hidden="true"></i>
            <span className="ml-3 text-danger"> Giá trị không hợp lệ </span>
          </>
        );
      } else
        return (
          <>
            <i
              className="fa fa-check-circle text-success"
              aria-hidden="true"></i>
            <span className="ml-3 text-success">Hoàn thành</span>
          </>
        );
    }
  };
  return (
    <div className="row mb-3">
      {props.children}
      <div className="col-md-4">{Message()}</div>
    </div>
  );
};

export default Validation;
