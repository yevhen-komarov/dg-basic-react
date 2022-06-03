import React from 'react';
import { useStore } from 'effector-react';
import { Card, CardContent, CardMedia, Box, CardActions, Button, TextField } from 'shared/ui';
import { EditIcon, SaveIcon, CancelIcon } from 'shared/ui';
import * as userModel from '../model';

const UserCard = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
  const user = useStore(userModel.$user)!;

  const onClickSave = () => {
    setIsEditing(false);
  };

  const onChangeTextField = ({ target: { id, value } }: React.ChangeEvent<HTMLInputElement>) => {
    isEditing && userModel.setUser(Object.assign({}, user, { [id]: value }));
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mt: 2,
        borderRadius: 4,
      }}
    >
      <CardActions
        sx={{
          mx: 2,
        }}
      >
        {!isEditing && (
          <Button
            disableElevation
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
            disableElevation
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
          <Button
            disableElevation
            startIcon={<SaveIcon />}
            size="small"
            variant="contained"
            onClick={onClickSave}
          >
            Save
          </Button>
        )}
      </CardActions>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <CardMedia sx={{ height: 200, width: 200 }} component="img" image={user.picture} />

        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
          <TextField
            id="nickname"
            label="nickname"
            color="secondary"
            onChange={onChangeTextField}
            margin="dense"
            size="small"
            variant="outlined"
            value={user.nickname}
          />
          <TextField
            id="name"
            label="name"
            color="secondary"
            onChange={onChangeTextField}
            margin="dense"
            size="small"
            variant="outlined"
            value={user.name}
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
        </CardContent>
      </Box>
    </Card>
  );
};

export { UserCard };
