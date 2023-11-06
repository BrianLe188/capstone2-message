// Original file: auth/user.proto

import type { Role as _role_Role, Role__Output as _role_Role__Output } from '../role/Role';
import type { Token as _token_Token, Token__Output as _token_Token__Output } from '../token/Token';

export interface UserOptions {
  'id'?: (string);
  'email'?: (string);
  'password'?: (string);
  'fullName'?: (string);
  'role'?: (_role_Role | null);
  'socket'?: (string);
  'ip'?: (string);
  'token'?: (_token_Token | null);
  '_id'?: "id";
  '_email'?: "email";
  '_password'?: "password";
  '_fullName'?: "fullName";
  '_role'?: "role";
  '_socket'?: "socket";
  '_ip'?: "ip";
  '_token'?: "token";
}

export interface UserOptions__Output {
  'id'?: (string);
  'email'?: (string);
  'password'?: (string);
  'fullName'?: (string);
  'role'?: (_role_Role__Output | null);
  'socket'?: (string);
  'ip'?: (string);
  'token'?: (_token_Token__Output | null);
  '_id': "id";
  '_email': "email";
  '_password': "password";
  '_fullName': "fullName";
  '_role': "role";
  '_socket': "socket";
  '_ip': "ip";
  '_token': "token";
}
