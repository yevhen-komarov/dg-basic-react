import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

import { HomePage } from './home';
import { NotFoundPage } from './not-found';

// import UserPageHeader from './user/user-header';
// import UserProfilePage from './user/user-profile';
// import UserAccountPage from './user/user-account';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="user" element={<UserPageHeader />}>
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="account" element={<UserAccountPage />} />
      </Route> */}
      <Route path="*" element={<NotFoundPage />} />
    </ReactRoutes>
  );
};

export { Routes };
