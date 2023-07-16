import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer/AuthReducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
});

export default RootReducer;
