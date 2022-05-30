import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';

const UserAccountPage = () => {
  React.useEffect(() => {
    document.title = 'User Account | YK Vite App';
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        height: 300,
      }}
    >
      <CardHeader title="Account"></CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default UserAccountPage;
