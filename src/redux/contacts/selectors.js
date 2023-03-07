import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.filterValue;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    const filteredContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) || number.includes(filter)
    );

    const sortedContacts = filteredContacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return sortedContacts;
  }
);
