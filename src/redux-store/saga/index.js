import {takeEvery} from 'redux-saga/effects';
import {ADD_BOOKMARK} from '../constants/ActionTypes';

import {_addBookMark} from './BookMark.saga';

const rootSaga = function* () {
  yield takeEvery(ADD_BOOKMARK, _addBookMark);
};

export default rootSaga;
