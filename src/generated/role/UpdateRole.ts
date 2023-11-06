// Original file: auth/role.proto

import type { Role as _role_Role, Role__Output as _role_Role__Output } from '../role/Role';

export interface UpdateRole {
  'id'?: (string);
  'body'?: (_role_Role | null);
}

export interface UpdateRole__Output {
  'id': (string);
  'body': (_role_Role__Output | null);
}
