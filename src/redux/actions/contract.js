import { INSERT_CONTRACT, ACCEPT_CONTRACT } from "../type";

export const createContract = payload => {
  window.localStorage.setItem("contract", JSON.stringify(payload));
  return { type: INSERT_CONTRACT, payload };
};

export const changeAccept = payload => {
  return { type: ACCEPT_CONTRACT, payload };
};

// export const changeAccept = (payload) => {
//     return { type: ACCEPT_CONTRACT, payload }
// };
