import Navigation from './Navigation';
import AuthNav from './AuthNav';
import { useAuth } from 'hooks/useAuth';
import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import UserMenu from './UserMenu';

export default function ResponsiveAppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, sm: 3 },
          py: { xs: 1, sm: 2 },
          '@media only screen and (max-width: 600px)': {
            justifyContent: 'space-around',
          },
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
}
