import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'shared/ui';
import { Routes } from 'pages';
import { MainAppBar } from 'widgets/main-app-bar';
import { ThemeProvider } from './providers';

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
