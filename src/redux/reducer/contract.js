import * as type from "../type";

const init = JSON.parse(window.localStorage.getItem("contract"));

function mentor(state = init, action) {
  switch (action.type) {
    case type.INSERT_CONTRACT:
      return { ...action.payload };
    case type.ACCEPT_CONTRACT:
      state = { ...state, accept: action.payload };
      window.localStorage.setItem("contract", JSON.stringify(state));
      return state;
    default:
      return state;
  }
}

export default mentor;
