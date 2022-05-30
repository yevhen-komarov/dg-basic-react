import React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

const UserPageHeader = () => {
  return (
    <>
      <Link component={RouterLink} to="/" variant="h5">
        Home
      </Link>
      <Typography variant="h2" sx={{ mt: 2 }} gutterBottom>
        Yevhen Komarov
      </Typography>

      <Outlet />
    </>
  );
};

export default UserPageHeader;
