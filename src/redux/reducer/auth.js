import * as type from "../type";

function initialState() {
  const info = localStorage.getItem("auth");
  return JSON.parse(info);
}

function auth(state = initialState(), action) {
  switch (action.type) {
    case type.LOGIN_GOOGLE:
      return (state = { ...action.payload });
    case type.REGISTER:
      return (state = { ...action.payload });
    case type.LOGOUT_ACCOUNT:
      return null;
    case type.PROFILE:
      return (state = { ...action.payload });
    case "CLEAR_AUTH":
      return (state = null);
    default:
      return state;
  }
}

export default auth;
