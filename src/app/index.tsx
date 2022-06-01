import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './providers';
import { MainAppBar } from 'widgets/main-app-bar';
import { Routes } from 'pages';
import { Container } from 'shared/ui';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
