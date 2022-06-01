import React from 'react';
import { UserCard } from 'widgets/user-card';
import { Card, CardContent, CardHeader } from 'shared/ui';

const UserPage = () => {
  React.useEffect(() => {
    document.title = 'User | YK Vite App';
  }, []);

  return <UserCard />;
};

export { UserPage };
