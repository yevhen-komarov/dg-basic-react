import React from 'react';

import { Container } from 'shared/ui';
import { Routes } from 'pages';
import { MainAppBar } from 'widgets/main-app-bar';
import { ThemeProvider } from './providers';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainAppBar />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export { App };
