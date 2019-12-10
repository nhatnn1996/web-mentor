import {
  ADD_RENTERS,
  ADD_MESSAGE,
  ACCEPT_RENTER,
  CANCEL_RENTER
} from "../type";

const init = JSON.parse(window.localStorage.getItem("renters")) || [];
function renters(state = init, action) {
  const { payload } = { ...action };
  switch (action.type) {
    case ADD_RENTERS:
      const i = state.findIndex(
        element => element.user._id === payload.user._id
      );
      if (i < 0) {
        state.unshift(payload);
        window.localStorage.setItem("renters", JSON.stringify(state));
      }

      return (state = [...state]);
    case ADD_MESSAGE:
      const index = state.findIndex(e => e.room === payload.room);
      delete payload.room;
      delete payload.auth.email;
      delete payload.auth.active;
      delete payload.auth.active;
      delete payload.auth.scores;
      delete payload.auth.surplus;
      state[index].message.push({ ...payload });
      window.localStorage.setItem("renters", JSON.stringify(state));

      return (state = [...state]);

    case ACCEPT_RENTER:
      const indexAccept = state.findIndex(e => e.room === payload.room);
      state[indexAccept].accpet = true;
      return (state = [...state]);

    case CANCEL_RENTER:
      const indexCancle = state.findIndex(e => e.room === payload.room);
      state.splice(indexCancle, 1);
      window.localStorage.setItem("renters", JSON.stringify(state));
      return (state = [...state]);

    default:
      return state;
  }
}

export default renters;
