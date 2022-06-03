import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from 'effector-react';

import { AccountCircle } from 'shared/ui';
import { Container, Typography, Button, IconButton, AppBar, Toolbar } from 'shared/ui';

import { userModel } from 'entities/user';
import { login, logout } from 'features/auth';

const MainAppBar = () => {
  const isAuthenticated = useStore(userModel.$isAuthenticated);

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ backgroundColor: 'Gold' }}>
        <Container>
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{ mr: 2, textDecoration: 'none', flexGrow: 1, fontWeight: 700 }}
            >
              YK Vite App
            </Typography>
            {!isAuthenticated ? (
              <Button variant="contained" size="small" color="success" onClick={login}>
                Login
              </Button>
            ) : (
              <>
                <Button variant="contained" size="small" color="secondary" onClick={logout}>
                  Log Out
                </Button>
                <IconButton component={RouterLink} to="/user">
                  <AccountCircle />
                </IconButton>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export { MainAppBar };
