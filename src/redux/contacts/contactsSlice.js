import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contacts-operations';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
        state.error = null;
      })
      .addCase(deleteContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, payload];
        state.error = null;
      })
      .addCase(addContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default contactsSlice.reducer;



