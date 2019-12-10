import Api from "../../service/api";
import dotenv from "dotenv";
import * as type from "../type";
dotenv.config();

export const login_by_google = (param, cb) => {
  return function(dispatch) {
    Api()
      .post("auth/google", param)
      .then(function(response) {
        dispatch({
          type: type.LOGIN_GOOGLE,
          payload: response.data.user
        });
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("auth", JSON.stringify(response.data.user));
        cb(null, true);
      })
      .catch(function(error) {
        cb(false, "SYS005");
      });
  };
};

export const logout_account = cb => {
  return function(dispatch) {
    localStorage.removeItem("jwt");
    localStorage.removeItem("auth");
    dispatch({ type: type.LOGOUT_ACCOUNT, payload: null });
    cb(true);
  };
};

export const profile = () => {
  return function(dispatch) {
    Api()
      .get("/user")
      .then(function(response) {
        dispatch({ type: type.PROFILE, payload: response.data.data });
        localStorage.setItem("auth", JSON.stringify(response.data.data));
      })
      .catch(function(error) {});
  };
};

export const login = (payload, cb) => {
  return function(dispatch) {
    Api()
      .post("auth/login", payload)
      .then(async function(response) {
        if (response.data.code === 200) {
          window.localStorage.setItem("jwt", response.data.token);
          localStorage.setItem("auth", JSON.stringify(response.data.data));
          dispatch({
            type: type.LOGIN_GOOGLE,
            payload: response.data.data
          });
          cb(true, null);
        } else {
          cb(false, "SYS004");
        }
      })
      .catch(function(error) {
        console.log(error);
        cb(false, "SYS005");
      });
  };
};

export const register = (payload, cb) => {
  return function(dispatch) {
    Api()
      .post("auth/register", payload)
      .then(function(response) {
        let param = response.data.data;
        param.active = false;
        dispatch({
          type: type.REGISTER,
          payload: param
        });
        localStorage.setItem("auth", JSON.stringify(response.data.data));
        cb(true, null);
      })
      .catch(function(error) {
        cb(false, "SYS008");
      });
  };
};

export const verify = (payload, cb) => {
  return function(dispatch) {
    Api()
      .post("auth/verify", payload)
      .then(function(response) {
        if (response.data.code === 200) {
          dispatch({
            type: type.REGISTER,
            payload: response.data.data
          });
          localStorage.setItem("auth", JSON.stringify(response.data.data));
          localStorage.setItem("jwt", response.data.token);
          cb(true, response.data);
        } else {
          cb(false, null);
          console.log(response.data);
        }
      })
      .catch(function(error) {
        cb(false, "ERROR");
      });
  };
};

export const verify_again = () => {
  Api()
    .get("user/verify-again", null)
    .then(response => {
      if (response.data.code !== 200) {
      }
    });
};

export const forget_password = (email, cb) => {
  Api()
    .post("auth/forget-password", { email })
    .then(response => {
      if (response.data.code === 200) {
        cb(true, null);
      } else {
        cb(false, null);
      }
    });
};

export const reset_password = (payload, cb) => {
  Api()
    .post("auth/reset-password", payload)
    .then(response => {
      if (response.data.code === 200) {
        cb(true, null);
      } else {
        cb(false, response.data.message);
      }
    });
};
