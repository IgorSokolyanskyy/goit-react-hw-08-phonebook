import { useAuth } from 'hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Button } from '@mui/material';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} component="nav">
      <Button
        to="/"
        sx={{ p: '10' }}
        component={RouterLink}
        variant="text"
        color="inherit"
        startIcon={<HomeIcon fontSize="large" />}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          to="/contacts"
          component={RouterLink}
          sx={{ p: '10' }}
          variant="text"
          color="inherit"
        >
          Contacts
        </Button>
      )}
    </Box>
  );
}
