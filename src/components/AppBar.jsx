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
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
}
