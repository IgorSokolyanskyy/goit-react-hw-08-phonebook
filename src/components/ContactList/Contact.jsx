import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { Notify } from 'notiflix';
import { Icon, Box, Name, Number } from './ContactList.styled';
import { IoCallSharp, IoPersonAddSharp } from 'react-icons/io5';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(contactsOperations.deleteContact(id));
    Notify.success(`"${name}" has been deleted.`);
  };

  return (
    <>
      <Box>
        <Name>
          <IoPersonAddSharp />

          <span style={{ marginLeft: '7px' }}> {name}</span>
        </Name>

        <Number>
          <IoCallSharp size={20} />
          <span style={{ marginLeft: '5px' }}> {number}</span>
        </Number>
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
