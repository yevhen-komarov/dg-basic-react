import React from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { useStore } from 'effector-react';

import { HomePage } from './home';
import { NotFoundPage } from './not-found';
import { UserPage } from './user';

import { userModel } from 'entities/user';

const Routes = () => {
  const isAuthenticated = useStore(userModel.$isAuthenticated);

  return (
    <ReactRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="user" element={isAuthenticated ? <UserPage /> : <Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRoutes>
  );
};

export { Routes };
