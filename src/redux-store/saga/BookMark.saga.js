import {call, put, select} from 'redux-saga/effects';

import {SAVE_BOOKMARK} from '../constants/ActionTypes';

export const _addBookMark = function* (action) {
  try {
    console.log('pa', action);

    const ID = Math.floor(Math.random() * 10000);

    yield put({
      type: SAVE_BOOKMARK,
      payload: {
        categoryName: action.payload.categoryName,
        title: action.payload.title,
        urlLink: action.payload.urlLink,
        id: ID,
      },
    });
  } catch (err) {
    console.log('Error in _addBookMark', err);
  }
};
