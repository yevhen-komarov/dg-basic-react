import { auth0Client } from 'shared/api';
import { userModel } from 'entities/user';

export const login = () => {
  auth0Client
    .loginWithPopup({ prompt: 'login' })
    .then(() => {
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      auth0Client.getUser().then((user) => userModel.setUser(user!));
    })
    .catch(() => {
      userModel.setUser(null);
    });
};

export const logout = () => {
  auth0Client.logout({
    returnTo: window.location.origin,
  });
  userModel.setUser(null);
};
