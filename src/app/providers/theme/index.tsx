import React from 'react';
import { CssBaseline, createTheme, ThemeProvider as MUIThemeProvider, Theme } from '@mui/material';
import backgroundImage from './background-image.jpg';

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const theme: Theme = createTheme({
    palette: {
      background: {
        default: '#f1f5f9',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: `url(${backgroundImage}) no-repeat center center fixed`,
            backgroundSize: 'cover',
          },
        },
      },
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export { ThemeProvider };
