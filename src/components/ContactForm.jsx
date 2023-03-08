import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

const generateId = () => nanoid();

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ) ||
      contacts.find(contact => contact.number === number)
    ) {
      Notify.warning(`"${name}" or "${number}" is already in contacts.`);
      form.reset();
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
    Notify.success(`Contact is "${name}" added`);
    form.reset();
  };

  const nameInputId = generateId();
  const numberInputId = generateId();

  return (
    <Box
      maxWidth="xs"
      sx={{
        position: 'relative',
        maxWidth: 300,
        minWidth: 270,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          margin="normal"
          required
          focused
          color="secondary"
          InputProps={{ style: { color: 'white' } }}
          id={nameInputId}
          label="Name"
          name="name"
          autoComplete="name"
          placeholder="Full name"
          autoFocus
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <TextField
          id={numberInputId}
          margin="normal"
          focused
          color="secondary"
          InputProps={{ style: { color: 'white' } }}
          label="Number"
          type="number"
          name="number"
          placeholder="111-11-11"
          pattern="\+?\d{0,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,3}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,12}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }}>
          Add contact
        </Button>
      </Box>
    </Box>
  );
}
