import React from 'react';
import { Card, CardContent, CardHeader } from 'shared/ui';

const UserCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        mt: 2,
        height: 300,
        borderRadius: 4,
      }}
    >
      <CardHeader title="Profile"></CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export { UserCard };
