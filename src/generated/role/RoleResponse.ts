// Original file: auth/role.proto

import type { Role as _role_Role, Role__Output as _role_Role__Output } from '../role/Role';

export interface RoleResponse {
  'role'?: (_role_Role | null);
  'error'?: (string);
  'response'?: "role"|"error";
}

export interface RoleResponse__Output {
  'role'?: (_role_Role__Output | null);
  'error'?: (string);
  'response': "role"|"error";
}
