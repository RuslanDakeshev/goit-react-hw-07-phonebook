// import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';
// import { initialContacts } from 'data/initialContacts';


// export const contactsReducer = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload];

//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);
    

//     default:
//       return state;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contacts-actions";

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({id}) => id !== payload),
});

