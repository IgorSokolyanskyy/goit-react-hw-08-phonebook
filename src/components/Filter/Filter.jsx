import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, filtersSlice } from 'redux/contacts';
import { Desk, Subtitle } from './Filter.styled';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter) || '';
  const contacts = useSelector(contactsSelectors.getContacts) || [];

  const totalContacts = contacts.length;

  const onChangeFilter = e => {
    const { value } = e.target;
    const trimmedValue = value.trim();

    if (typeof trimmedValue === 'string') {
      dispatch(filtersSlice.setFilter(trimmedValue));
    }
  };

  return (
    <>
      <Subtitle>Contacts</Subtitle>
      <Desk>
        {contacts.length ? (
          <Box component="form" value={filter} onChange={onChangeFilter}>
            <TextField
              sx={{ m: 0 }}
              label="Find contacts by name"
              color="secondary"
              focused
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
              InputProps={{
                style: { color: 'white', width: '200px', height: '35px' },
              }}
            />
          </Box>
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}

        {contacts.length > 0 && <p>Total contacts: {totalContacts}</p>}
      </Desk>
    </>
  );
}
