import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './providers';
import { MainAppBar } from 'widgets';
import { Routes } from 'pages';
import { Container } from 'shared/ui';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainAppBar />
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { App };
