import { Box, Button } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <Box>
      <Button
        to="/register"
        sx={{ p: '10' }}
        component={RouterLink}
        variant="text"
        color="inherit"
      >
        Register
      </Button>
      <Button
        to="/login"
        sx={{ p: '10' }}
        component={RouterLink}
        variant="text"
        color="inherit"
      >
        Log In
      </Button>
    </Box>
  );
}
