import {
  ADD_RENTERS,
  ADD_ROOM_LAST,
  ADD_MESSAGE,
  ACCEPT_RENTER,
  CANCEL_RENTER
} from "../type";

export const add_renter = payload => {
  return function(dispatch) {
    dispatch({
      type: ADD_RENTERS,
      payload
    });
  };
};

export const addRoomLast = payload => {
  return function(dispatch) {
    dispatch({
      type: ADD_ROOM_LAST,
      payload
    });
  };
};

export const addMessage = payload => {
  return function(dispatch) {
    dispatch({ type: ADD_MESSAGE, payload });
  };
};

export const changeAccept = payload => {
  return function(dispatch) {
    dispatch({ type: ACCEPT_RENTER, payload });
  };
};

export const removeRenter = payload => {
  return function(dispatch) {
    dispatch({ type: CANCEL_RENTER, payload });
  };
};
