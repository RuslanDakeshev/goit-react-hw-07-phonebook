import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })

      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })

      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContacts.pending,
          addContacts.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContacts.fulfilled,
          addContacts.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContacts.rejected,
          addContacts.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default contactsSlice.reducer;
