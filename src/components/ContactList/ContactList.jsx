import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors, contactsOperations } from 'redux/contacts';

import Loader from 'components/Loader';
import Contact from './Contact';

import { List, Item } from './ContactList.styled';

export default function ContactList() {
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        error && (
          <p style={{ color: 'red' }}>
            Sorry, something went wrong, try again.
          </p>
        )
      )}
      <List>
        {visibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Contact name={name} number={number} id={id} />
          </Item>
        ))}
      </List>
    </>
  );
}
