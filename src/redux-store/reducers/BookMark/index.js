import {SAVE_BOOKMARK} from '../../constants/ActionTypes';

const initialState = {
  bookmarkList: [],
  categoryList: [
    {label: 'Category A', value: 'Category A'},
    {label: 'Category B', value: 'Category B'},
    {label: 'Category C', value: 'Category C'},
    {label: 'Category E', value: 'Category E'},
    {label: 'Category F', value: 'Category F'},
    {label: 'Category G', value: 'Category G'},
  ],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BOOKMARK:
      return {
        ...state,
        bookmarkList: [...state.bookmarkList, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
