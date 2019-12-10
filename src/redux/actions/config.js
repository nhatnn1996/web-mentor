import {CHANGE_STATUS_MENTOR} from "../type";

export const changeStatus = (payload) => {
  return function (dispatch) {
    dispatch( {type:CHANGE_STATUS_MENTOR, payload}) 
  };
};
