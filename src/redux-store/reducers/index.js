import {combineReducers} from 'redux';
import BookMark from './BookMark';

const rootReducer = combineReducers({
  bookmark: BookMark,
});

export default rootReducer;
