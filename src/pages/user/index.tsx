import React from 'react';
import { UserCard } from './user-card';

const UserPage = () => {
  React.useEffect(() => {
    document.title = 'User | YK Vite App';
  }, []);

  return <UserCard />;
};

export { UserPage };
