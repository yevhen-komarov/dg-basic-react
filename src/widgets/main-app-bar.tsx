import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AccountCircle } from 'shared/ui';
import { Container, Typography, Button, IconButton, AppBar, Toolbar } from 'shared/ui';

const MainAppBar = () => {
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
            <Button color="secondary">Login</Button>
            <IconButton component={RouterLink} to="/user">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export { MainAppBar };
