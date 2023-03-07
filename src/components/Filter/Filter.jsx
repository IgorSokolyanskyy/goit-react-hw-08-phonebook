// import { useDispatch } from 'react-redux';
// import { filtersSlice } from 'redux/contacts';
// import { TextField } from '@mui/material';

// export default function Filter() {
//   const dispatch = useDispatch();

//   function changeFilter(e) {
//     const inputValue = e.target.value;
//     dispatch(filtersSlice.setFilter(inputValue));
//   }

//   return (
//     <TextField
//       variant="standard"
//       label="Find contacs by name"
//       type="text"
//       name="filter"
//       placeholder="Enter name"
//       onChange={changeFilter}
//       sx={{ mb: 2 }}
//     />
//   );
// }
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
