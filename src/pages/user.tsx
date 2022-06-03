import React from 'react';
import { UserCard } from 'entities/user/ui/card';

const UserPage = () => {
  React.useEffect(() => {
    document.title = 'User | YK Vite App';
  }, []);

  return <UserCard />;
};

export { UserPage };
