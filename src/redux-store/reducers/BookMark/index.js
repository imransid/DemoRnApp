// import {SAVE_BOOKMARK} from '../../constants/ActionTypes';

// const initialState = {
//   bookmarkList: [],
//   categoryList: [
//     {label: 'Category A', value: 'Category A'},
//     {label: 'Category B', value: 'Category B'},
//     {label: 'Category C', value: 'Category C'},
//     {label: 'Category E', value: 'Category E'},
//     {label: 'Category F', value: 'Category F'},
//     {label: 'Category G', value: 'Category G'},
//   ],
// };

// const index = (state = initialState, action) => {
//   switch (action.type) {
//     case SAVE_BOOKMARK:
//       return {
//         ...state,
//         bookmarkList: [...state.bookmarkList, action.payload],
//       };
//     default:
//       return {
//         ...state,
//         bookmarkList: state.bookmarkList.sort((a, b) => {
//           // Replace 'createdAt' with the property you want to sort by
//           return new Date(b.createdAt) - new Date(a.createdAt);
//         }),
//       };
//   }
// };

// export default index;

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

const index = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BOOKMARK:
      const newBookmarkList = [...state.bookmarkList, action.payload];
      newBookmarkList.sort((a, b) => a.title.localeCompare(b.title)); // Sort the bookmarkList array by title
      return {
        ...state,
        bookmarkList: newBookmarkList,
      };
    default:
      return state;
  }
};

export default index;
