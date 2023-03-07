import { useDispatch, useSelector } from 'react-redux';

import { contactsSelectors, filtersSlice } from 'redux/contacts';

import { Box, Label, Input, Subtitle } from './Filter.styled';

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
      <Box>
        {contacts.length ? (
          <Label>
            Find contacts by name:
            <Input type="text" value={filter} onChange={onChangeFilter} />
          </Label>
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}

        {contacts.length > 0 && <p>Total contacts: {totalContacts}</p>}
      </Box>
    </>
  );
}
