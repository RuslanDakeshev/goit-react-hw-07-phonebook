import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterReducer: (state, { payload }) => {
      state.filter = payload.toLowerCase();
    },
  },
});

export const { filterReducer } = filterSlice.actions;
export default filterSlice.reducer;
