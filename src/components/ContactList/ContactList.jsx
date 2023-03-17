import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import Loader from 'components/Loader';
import Contact from './Contact';
import { List, Item } from './ContactList.styled';

export default function ContactList() {
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);

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
