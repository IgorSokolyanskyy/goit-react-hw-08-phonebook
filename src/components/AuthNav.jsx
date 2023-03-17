import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export default function AuthNav() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'center', sm: 'flex-end' },
        alignItems: 'center',
      }}
    >
      <Button
        to="/register"
        sx={{
          p: { xs: '8px', sm: '10px' },
          m: { xs: '4px', sm: '0' },
          '&.active': { color: 'rgb(130, 1, 1)', fontSize: '20px' },
        }}
        component={RouterLink}
        variant="text"
        color="inherit"
      >
        Register
      </Button>
      <Button
        to="/login"
        sx={{
          p: { xs: '8px', sm: '10px' },
          m: { xs: '4px', sm: '0' },
          '&.active': { color: 'rgb(130, 1, 1)', fontSize: '20px' },
        }}
        component={RouterLink}
        variant="text"
        color="inherit"
      >
        Log In
      </Button>
    </Box>
  );
}
