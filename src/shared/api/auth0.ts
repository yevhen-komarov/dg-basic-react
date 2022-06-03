import { Auth0Client, Auth0ClientOptions } from '@auth0/auth0-spa-js';

const config: Auth0ClientOptions = {
  domain: 'f-soft.eu.auth0.com',
  client_id: 'rzsxym4ptdMej87d9dCmEBn10OZHc6xx',
  redirect_uri: window.location.origin,
};

export const auth0Client: Auth0Client = new Auth0Client(config);
