import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/home';
import NotFoundPage from '../../pages/not-found';
import UserPageHeader from '../../pages/user/user-header';
import UserProfilePage from '../../pages/user/user-profile';
import UserAccountPage from '../../pages/user/user-account';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="user" element={<UserPageHeader />}>
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="account" element={<UserAccountPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
