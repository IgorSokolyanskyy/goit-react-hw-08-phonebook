import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader';
import { Box, useTheme } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const theme = useTheme();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',

        [theme.breakpoints.down('sm')]: {
          gap: 2,
          flexDirection: 'column',
          alignItems: 'center',
        },
        [theme.breakpoints.up('sm')]: {
          gap: 6,
          alignItems: 'start',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mt: 3,
        }}
      >
        <ContactForm />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mt: 3,
        }}
      >
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
      </Box>
    </Box>
  );
}
