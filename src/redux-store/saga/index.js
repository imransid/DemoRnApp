import {takeEvery} from 'redux-saga/effects';
import {SIGNUP_REQUEST} from '../constants/ActionTypes';
import {_signUp} from './Auth.saga';

const rootSaga = function* () {
  yield takeEvery(SIGNUP_REQUEST, _signUp);
};

export default rootSaga;
