import { useMutation } from '@apollo/client';
import { UserLoginDocument } from './graphql';

export function login(email: string, password: string) {
  const [mutate, { data, loading }] = useMutation(UserLoginDocument);
}
export function getMe() {}
export function register() {}

export function removeToken() {}
