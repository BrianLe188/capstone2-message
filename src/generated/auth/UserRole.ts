// Original file: auth/auth.proto

import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { Role as _role_Role, Role__Output as _role_Role__Output } from '../role/Role';

export interface UserRole {
  'user'?: (_user_User | null);
  'role'?: (_role_Role | null);
}

export interface UserRole__Output {
  'user': (_user_User__Output | null);
  'role': (_role_Role__Output | null);
}
