import React from 'react';
import { Card, CardContent, CardHeader } from 'shared/ui';

const UserPage = () => {
  React.useEffect(() => {
    document.title = 'User | YK Vite App';
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        mt: 2,
        height: 300,
        borderRadius: 3,
      }}
    >
      <CardHeader title="Profile"></CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export { UserPage };
