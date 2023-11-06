// Original file: auth/user.proto

import type { Users as _user_Users, Users__Output as _user_Users__Output } from '../user/Users';

export interface UsersResponse {
  'users'?: (_user_Users | null);
  'error'?: (string);
  'response'?: "users"|"error";
}

export interface UsersResponse__Output {
  'users'?: (_user_Users__Output | null);
  'error'?: (string);
  'response': "users"|"error";
}
