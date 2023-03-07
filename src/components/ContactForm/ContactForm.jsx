import { useDispatch, useSelector } from 'react-redux';

import { contactsSelectors, contactsOperations } from 'redux/contacts';

import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

import { Notify } from 'notiflix';

import { Input, Button, FormList } from './ContactForm.styled';

const generateId = () => nanoid();

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ) ||
      contacts.find(contact => contact.number === number)
    ) {
      Notify.warning(`"${name}" or "${number}" is already in contacts.`);
      resetForm();
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
    Notify.success(`Contact is "${name}" added`);
    resetForm();
  };

  const nameInputId = generateId();
  const numberInputId = generateId();

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormList autoComplete="on">
          <label htmlFor={nameInputId}>
            <p>Name</p>
            <Input
              id={nameInputId}
              type="text"
              name="name"
              placeholder="Full name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" />
          </label>

          <label htmlFor={numberInputId}>
            <p>Number</p>
            <Input
              id={numberInputId}
              type="tel"
              name="number"
              placeholder="111-11-11"
              pattern="\+?\d{0,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,3}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,12}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" />
          </label>

          <Button type="submit">Add contact</Button>
        </FormList>
      </Formik>
    </>
  );
}
