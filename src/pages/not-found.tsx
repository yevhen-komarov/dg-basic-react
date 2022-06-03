import React from 'react';
import { Typography, Box } from 'shared/ui';

const NotFoundPage = () => {
  React.useEffect(() => {
    document.title = '404 | YK Vite App';
  }, []);

  return (
    <Box
      sx={{
        my: 10,
        color: 'darkred',
      }}
    >
      <Typography sx={{ fontWeight: 'bold' }} variant="h1" align="center" gutterBottom>
        Oops!
      </Typography>
      <Typography sx={{ fontWeight: 'bold' }} variant="h3" align="center" gutterBottom>
        PAGE NOT FOUND
      </Typography>
    </Box>
  );
};

export { NotFoundPage };
