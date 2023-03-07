import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { contactsOperations } from 'redux/contacts';

import { Notify } from 'notiflix';

import { Icon } from './ContactList.styled';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(contactsOperations.deleteContact(id));
    Notify.success(`"${name}" has been deleted.`);
  };

  return (
    <>
      <p>
        <b>{name} :</b> ( {number} )
      </p>

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
