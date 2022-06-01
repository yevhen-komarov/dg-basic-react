import React from 'react';
import { Typography, Box } from 'shared/ui';

const HomePage = () => {
  React.useEffect(() => {
    document.title = 'Home | YK Vite App';
  }, []);

  return (
    <Box
      sx={{
        my: 10,
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
      ></Box>
    </Box>
  );
};

export { HomePage };
