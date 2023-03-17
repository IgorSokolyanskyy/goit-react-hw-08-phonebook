import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Container, Link, Typography } from '@mui/material';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Container sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
        Welcome to your personal phonebook.
        <br />
        <Link to="/contacts" component={NavLink}>
          Add your contacts
        </Link>
      </Typography>
    </Container>
  ) : (
    <Container>
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: 'center', marginTop: '12px' }}
      >
        Welcome to your personal phonebook. Please
        <br />
        <Link to="/register" component={NavLink}>
          register
        </Link>{' '}
        or{' '}
        <Link to="/login" component={NavLink}>
          login
        </Link>
      </Typography>
    </Container>
  );
}
