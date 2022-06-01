import React from 'react';
import { Card, CardContent, Box, CardActions, Button, TextField } from 'shared/ui';

import EditIcon from 'shared/ui';
import SaveIcon from 'shared/ui';
import CancelIcon from 'shared/ui';

const defaultUser = {
  user_id: 'custom|123',
  username: 'john.doe',
  family_name: 'Doe',
  given_name: 'John',
  email: 'john.doe@test.com',
};

const UserCard = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [user, setUser] = React.useState(defaultUser);

  const onClickSave = () => {
    setIsEditing(false);
  };

  const onChangeTextField = ({ target: { id, value } }: React.ChangeEvent<HTMLInputElement>) => {
    isEditing && setUser((user) => Object.assign({}, user, { [id]: value }));
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mt: 2,
        borderRadius: 4,
      }}
    >
      <CardActions>
        {!isEditing && (
          <Button
            startIcon={<EditIcon />}
            size="small"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </Button>
        )}
        {isEditing && (
          <Button
            startIcon={<CancelIcon />}
            size="small"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Cancel
          </Button>
        )}
        {isEditing && (
          <Button startIcon={<SaveIcon />} size="small" variant="contained" onClick={onClickSave}>
            Save
          </Button>
        )}
      </CardActions>

      <CardContent>
        <Box
          sx={{
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            id="user_id"
            label="user_id"
            color="secondary"
            onChange={onChangeTextField}
            margin="dense"
            size="small"
            variant="outlined"
            value={user.user_id}
          />
          <TextField
            id="username"
            label="username"
            color="secondary"
            onChange={onChangeTextField}
            margin="dense"
            size="small"
            variant="outlined"
            value={user.username}
          />
        </Box>
        <Box
          sx={{
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            id="family_name"
            label="family_name"
            color="secondary"
            onChange={onChangeTextField}
            margin="dense"
            size="small"
            variant="outlined"
            value={user.family_name}
          />
          <TextField
            id="given_name"
            label="given_name"
            color="secondary"
            onChange={onChangeTextField}
            margin="dense"
            size="small"
            variant="outlined"
            value={user.given_name}
          />
          <TextField
            id="email"
            label="email"
            color="secondary"
            onChange={onChangeTextField}
            margin="dense"
            size="small"
            variant="outlined"
            value={user.email}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export { UserCard };
