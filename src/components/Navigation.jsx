import { useAuth } from 'hooks/useAuth';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} component="nav">
      <Button
        to="/"
        sx={{
          p: '10',
          '&.active': { color: 'rgb(130, 1, 1)', fontSize: '20px' },
        }}
        component={RouterNavLink}
        activeClassName="active"
        exact
        variant="text"
        color="inherit"
        startIcon={<HomeIcon fontSize="large" />}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          to="/contacts"
          component={RouterNavLink}
          sx={{
            p: '10',
            '&.active': { color: 'rgb(130, 1, 1)', fontSize: '20px' },
          }}
          activeClassName="active"
          variant="text"
          color="inherit"
        >
          Contacts
        </Button>
      )}
    </Box>
  );
}
