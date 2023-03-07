import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {},
  //   }),
});
