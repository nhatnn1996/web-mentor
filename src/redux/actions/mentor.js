import dotenv from "dotenv";
import Api from "../../service/api";
import { LIST_MENTORS } from "../type";
dotenv.config();

export const getGlobal = cb => {
  return function(dispatch) {
    Api()
      .get("global")
      .then(function(response) {
        cb(null, response.data);
      })
      .catch(function(error) {
        cb(error, null);
      });
  };
};

export const mentors_online = (payload, cb) => {
  return function(dispatch) {
    dispatch({type: LIST_MENTORS, payload })
  };
};

export const register = (param, cb) => {
  return function(dispatch) {
    Api()
      .post("mentor", param)
      .then(function(response) {
        cb(true, response.data.data);
      })
      .catch(function(error) {
        cb(error, null);
      });
  };
};

export const readMentor = (payload, cb) => {
  const url = "user/" + payload;
  Api()
    .get(url)
    .then(function(response) {
      cb(true, response.data.data);
    })
    .catch(function(error) {});
};
