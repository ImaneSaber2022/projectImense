import { combineReducers } from "redux";

import userReducer from "./user";

const allReducers = combineReducers({
  userreducer: userReducer,
});

export default allReducers;
