import React from 'react';
import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';

import Routing from './Routing';

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: '#f1f5f9',
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Routing />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
