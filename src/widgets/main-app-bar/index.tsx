import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Container, Typography, Button, IconButton } from 'shared/ui';
import { Link as RouterLink } from 'react-router-dom';

const MainAppBar = () => {
  return (
    <React.Fragment>
      <AppBar
        variant="outlined"
        position="sticky"
        sx={{ backgroundColor: 'Gold' }}
        // color="inherit"
      >
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
