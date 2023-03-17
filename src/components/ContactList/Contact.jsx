import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { Notify } from 'notiflix';
import { Icon, Box, Name, Number } from './ContactList.styled';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(contactsOperations.deleteContact(id));
    Notify.success(`"${name}" has been deleted.`);
  };

  return (
    <>
      <Box>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </Box>

      <Icon
        onClick={handleDelete}
        size="22px"
        title="Delete contact"
        aria-label="Delete contact"
      />
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
