import {SIGNUP_REQUEST} from '../../constants/ActionTypes';

const initialState = {
  pending: false,
  token: 'sdfsdfsdf',
  error: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        pending: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
