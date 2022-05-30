import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {
  React.useEffect(() => {
    document.title = 'Home | YK Vite App';
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to YK Vite App
      </Typography>

      <Box
        sx={{
          mx: 'auto',
          typography: 'h5',
          '& > :not(style) + :not(style)': {
            ml: 2,
          },
        }}
      >
        <Link component={RouterLink} to="/user/profile" underline="hover">
          Profile
        </Link>
        <Link component={RouterLink} to="/user/account" underline="hover">
          Account
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
