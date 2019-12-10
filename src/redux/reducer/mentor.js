import { LIST_MENTORS } from "../type";

const init = JSON.parse(window.localStorage.getItem("mentors")) || [];

function mentor(state = init, action) {
  switch (action.type) {
    case LIST_MENTORS:
      return (state = action.payload);
    default:
      return state;
  }
}

export default mentor;
