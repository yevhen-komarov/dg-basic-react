import { createStore, createEvent } from 'effector';
import { User } from '@auth0/auth0-spa-js';

export const setUser = createEvent<User | null>();

export const $user = createStore<User | null>(null).on(setUser, (_, user) => user);

export const $isAuthenticated = $user.map((user: User | null) => !!user);
