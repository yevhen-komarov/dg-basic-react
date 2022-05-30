import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';

const UserProfilePage = () => {
  React.useEffect(() => {
    document.title = 'User Profile | YK Vite App';
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        height: 300,
      }}
    >
      <CardHeader title="Profile"></CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default UserProfilePage;
