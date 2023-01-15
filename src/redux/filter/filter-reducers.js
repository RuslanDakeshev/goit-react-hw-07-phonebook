import { FILTER_VALUE } from './filter-types';


export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_VALUE:
      return [payload];

    default:
      return state;
  }
};


// import { createReducer } from '@reduxjs/toolkit';
// import { setFilter } from './filter-actions';

// export const filterReducer = createReducer('', {
//   [setFilter]: (state, { payload }) => [payload],
// });
