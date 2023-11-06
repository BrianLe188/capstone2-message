// Original file: auth/user.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface UpdateUser {
  'id'?: (string);
  'body'?: (_user_User | null);
}

export interface UpdateUser__Output {
  'id': (string);
  'body': (_user_User__Output | null);
}
