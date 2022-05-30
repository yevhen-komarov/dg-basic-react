import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Box, Link } from '@mui/material';

const NotFoundPage = () => {
  React.useEffect(() => {
    document.title = '404 | YK Vite App';
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
      <Typography sx={{ fontWeight: 'bold' }} variant="h1" align="center" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h3" align="center" gutterBottom>
        PAGE NOT FOUND
      </Typography>

      <Link component={RouterLink} to="/" variant="h5" align="center">
        Home
      </Link>
    </Box>
  );
};

export default NotFoundPage;
