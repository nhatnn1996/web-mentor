import { combineReducers } from "redux";
import authReducer from "./reducer/auth";
import rentersReducer from "./reducer/renter";
import mentorsReducer from "./reducer/mentor";
import contractReducer from "./reducer/contract";

const rootReducer = combineReducers({
  mentors: mentorsReducer,
  auth: authReducer,
  renters: rentersReducer,
  contract: contractReducer
});

export default rootReducer;
