import { call, put, select } from "redux-saga/effects";

import { SIGNUP_REQUEST } from "../constants/ActionTypes/ActionTypes";


const _authApiCall = function* (action) {
  try {
    let res = true;
  
    return res;
  } catch (err) {
    console.log("Error in _authApiCall ", err);
    return false;
  }
};

export const _signUp = function* (action) {
  try {
    let data = {
      username: action.data.userName,
      password: action.data.password,
    };

    const authStatus = yield call(_authApiCall, data);

    //   if (authStatus.status) {
    //     yield put({
    //       type: SIGH_IN_SUCCESSFULLY,
    //       payload: {
    //         username: authStatus.username,
    //         token: authStatus.token,
    //         expireTime: authStatus.expireTime,
    //         userAllData: authStatus.userAllData,
    //       },
    //     });
    //   } else {
    //     yield put({
    //       type: SIGH_IN_ERROR,
    //       payload: {
    //         msg: authStatus.msg,
    //       },
    //     });
    //   }
  } catch (err) {
    console.log("Error in _signIn", err);
  }
};
