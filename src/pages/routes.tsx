import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { HomePage } from './home';
import { NotFoundPage } from './not-found';
import { UserPage } from './user';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="user" element={<UserPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRoutes>
  );
};

export { Routes };
