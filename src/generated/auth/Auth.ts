// Original file: auth/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Email as _user_Email, Email__Output as _user_Email__Output } from '../user/Email';
import type { Exist as _auth_Exist, Exist__Output as _auth_Exist__Output } from '../auth/Exist';
import type { GreetRequest as _auth_GreetRequest, GreetRequest__Output as _auth_GreetRequest__Output } from '../auth/GreetRequest';
import type { GreetResponse as _auth_GreetResponse, GreetResponse__Output as _auth_GreetResponse__Output } from '../auth/GreetResponse';
import type { Login as _user_Login, Login__Output as _user_Login__Output } from '../user/Login';
import type { Message as _auth_Message, Message__Output as _auth_Message__Output } from '../auth/Message';
import type { Role as _role_Role, Role__Output as _role_Role__Output } from '../role/Role';
import type { RoleResponse as _role_RoleResponse, RoleResponse__Output as _role_RoleResponse__Output } from '../role/RoleResponse';
import type { Target as _auth_Target, Target__Output as _auth_Target__Output } from '../auth/Target';
import type { Token as _auth_Token, Token__Output as _auth_Token__Output } from '../auth/Token';
import type { TokenResponse as _token_TokenResponse, TokenResponse__Output as _token_TokenResponse__Output } from '../token/TokenResponse';
import type { UpdateRole as _role_UpdateRole, UpdateRole__Output as _role_UpdateRole__Output } from '../role/UpdateRole';
import type { UpdateUser as _user_UpdateUser, UpdateUser__Output as _user_UpdateUser__Output } from '../user/UpdateUser';
import type { UserFromToken as _auth_UserFromToken, UserFromToken__Output as _auth_UserFromToken__Output } from '../auth/UserFromToken';
import type { UserOptions as _user_UserOptions, UserOptions__Output as _user_UserOptions__Output } from '../user/UserOptions';
import type { UserResponse as _user_UserResponse, UserResponse__Output as _user_UserResponse__Output } from '../user/UserResponse';
import type { UserRole as _auth_UserRole, UserRole__Output as _auth_UserRole__Output } from '../auth/UserRole';
import type { UsersResponse as _user_UsersResponse, UsersResponse__Output as _user_UsersResponse__Output } from '../user/UsersResponse';

export interface AuthClient extends grpc.Client {
  CreateRole(argument: _role_Role, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  CreateRole(argument: _role_Role, metadata: grpc.Metadata, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  CreateRole(argument: _role_Role, options: grpc.CallOptions, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  CreateRole(argument: _role_Role, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  createRole(argument: _role_Role, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  createRole(argument: _role_Role, metadata: grpc.Metadata, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  createRole(argument: _role_Role, options: grpc.CallOptions, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  createRole(argument: _role_Role, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  
  CreateUser(argument: _auth_UserRole, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _auth_UserRole, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _auth_UserRole, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _auth_UserRole, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _auth_UserRole, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _auth_UserRole, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _auth_UserRole, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _auth_UserRole, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  
  Default(argument: _auth_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _auth_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _auth_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _auth_GreetRequest, callback: grpc.requestCallback<_auth_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _auth_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _auth_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _auth_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _auth_GreetRequest, callback: grpc.requestCallback<_auth_GreetResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteRole(argument: _auth_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  DeleteRole(argument: _auth_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  DeleteRole(argument: _auth_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  DeleteRole(argument: _auth_Target, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  deleteRole(argument: _auth_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  deleteRole(argument: _auth_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  deleteRole(argument: _auth_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  deleteRole(argument: _auth_Target, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  
  DeleteUser(argument: _auth_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _auth_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _auth_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _auth_Target, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _auth_Target, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _auth_Target, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _auth_Target, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _auth_Target, callback: grpc.requestCallback<_auth_Message__Output>): grpc.ClientUnaryCall;
  
  GetAllUser(argument: _user_UserOptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  GetAllUser(argument: _user_UserOptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  GetAllUser(argument: _user_UserOptions, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  GetAllUser(argument: _user_UserOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUser(argument: _user_UserOptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUser(argument: _user_UserOptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUser(argument: _user_UserOptions, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUser(argument: _user_UserOptions, callback: grpc.requestCallback<_user_UsersResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserById(argument: _user_UserOptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _user_UserOptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _user_UserOptions, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUserById(argument: _user_UserOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _user_UserOptions, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _user_UserOptions, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _user_UserOptions, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUserById(argument: _user_UserOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  
  IsExistUser(argument: _user_Email, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Exist__Output>): grpc.ClientUnaryCall;
  IsExistUser(argument: _user_Email, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_Exist__Output>): grpc.ClientUnaryCall;
  IsExistUser(argument: _user_Email, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Exist__Output>): grpc.ClientUnaryCall;
  IsExistUser(argument: _user_Email, callback: grpc.requestCallback<_auth_Exist__Output>): grpc.ClientUnaryCall;
  isExistUser(argument: _user_Email, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Exist__Output>): grpc.ClientUnaryCall;
  isExistUser(argument: _user_Email, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_Exist__Output>): grpc.ClientUnaryCall;
  isExistUser(argument: _user_Email, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Exist__Output>): grpc.ClientUnaryCall;
  isExistUser(argument: _user_Email, callback: grpc.requestCallback<_auth_Exist__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _user_Login, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _user_Login, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _user_Login, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _user_Login, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_Login, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_Login, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_Login, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_Login, callback: grpc.requestCallback<_token_TokenResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateRole(argument: _role_UpdateRole, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  UpdateRole(argument: _role_UpdateRole, metadata: grpc.Metadata, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  UpdateRole(argument: _role_UpdateRole, options: grpc.CallOptions, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  UpdateRole(argument: _role_UpdateRole, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  updateRole(argument: _role_UpdateRole, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  updateRole(argument: _role_UpdateRole, metadata: grpc.Metadata, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  updateRole(argument: _role_UpdateRole, options: grpc.CallOptions, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  updateRole(argument: _role_UpdateRole, callback: grpc.requestCallback<_role_RoleResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateUser(argument: _user_UpdateUser, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _user_UpdateUser, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _user_UpdateUser, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _user_UpdateUser, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_UpdateUser, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_UpdateUser, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_UpdateUser, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_UpdateUser, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  
  VerifyToken(argument: _auth_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserFromToken__Output>): grpc.ClientUnaryCall;
  VerifyToken(argument: _auth_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UserFromToken__Output>): grpc.ClientUnaryCall;
  VerifyToken(argument: _auth_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserFromToken__Output>): grpc.ClientUnaryCall;
  VerifyToken(argument: _auth_Token, callback: grpc.requestCallback<_auth_UserFromToken__Output>): grpc.ClientUnaryCall;
  verifyToken(argument: _auth_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserFromToken__Output>): grpc.ClientUnaryCall;
  verifyToken(argument: _auth_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UserFromToken__Output>): grpc.ClientUnaryCall;
  verifyToken(argument: _auth_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserFromToken__Output>): grpc.ClientUnaryCall;
  verifyToken(argument: _auth_Token, callback: grpc.requestCallback<_auth_UserFromToken__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthHandlers extends grpc.UntypedServiceImplementation {
  CreateRole: grpc.handleUnaryCall<_role_Role__Output, _role_RoleResponse>;
  
  CreateUser: grpc.handleUnaryCall<_auth_UserRole__Output, _user_UserResponse>;
  
  Default: grpc.handleUnaryCall<_auth_GreetRequest__Output, _auth_GreetResponse>;
  
  DeleteRole: grpc.handleUnaryCall<_auth_Target__Output, _auth_Message>;
  
  DeleteUser: grpc.handleUnaryCall<_auth_Target__Output, _auth_Message>;
  
  GetAllUser: grpc.handleUnaryCall<_user_UserOptions__Output, _user_UsersResponse>;
  
  GetUserById: grpc.handleUnaryCall<_user_UserOptions__Output, _user_UserResponse>;
  
  IsExistUser: grpc.handleUnaryCall<_user_Email__Output, _auth_Exist>;
  
  Login: grpc.handleUnaryCall<_user_Login__Output, _token_TokenResponse>;
  
  UpdateRole: grpc.handleUnaryCall<_role_UpdateRole__Output, _role_RoleResponse>;
  
  UpdateUser: grpc.handleUnaryCall<_user_UpdateUser__Output, _user_UserResponse>;
  
  VerifyToken: grpc.handleUnaryCall<_auth_Token__Output, _auth_UserFromToken>;
  
}

export interface AuthDefinition extends grpc.ServiceDefinition {
  CreateRole: MethodDefinition<_role_Role, _role_RoleResponse, _role_Role__Output, _role_RoleResponse__Output>
  CreateUser: MethodDefinition<_auth_UserRole, _user_UserResponse, _auth_UserRole__Output, _user_UserResponse__Output>
  Default: MethodDefinition<_auth_GreetRequest, _auth_GreetResponse, _auth_GreetRequest__Output, _auth_GreetResponse__Output>
  DeleteRole: MethodDefinition<_auth_Target, _auth_Message, _auth_Target__Output, _auth_Message__Output>
  DeleteUser: MethodDefinition<_auth_Target, _auth_Message, _auth_Target__Output, _auth_Message__Output>
  GetAllUser: MethodDefinition<_user_UserOptions, _user_UsersResponse, _user_UserOptions__Output, _user_UsersResponse__Output>
  GetUserById: MethodDefinition<_user_UserOptions, _user_UserResponse, _user_UserOptions__Output, _user_UserResponse__Output>
  IsExistUser: MethodDefinition<_user_Email, _auth_Exist, _user_Email__Output, _auth_Exist__Output>
  Login: MethodDefinition<_user_Login, _token_TokenResponse, _user_Login__Output, _token_TokenResponse__Output>
  UpdateRole: MethodDefinition<_role_UpdateRole, _role_RoleResponse, _role_UpdateRole__Output, _role_RoleResponse__Output>
  UpdateUser: MethodDefinition<_user_UpdateUser, _user_UserResponse, _user_UpdateUser__Output, _user_UserResponse__Output>
  VerifyToken: MethodDefinition<_auth_Token, _auth_UserFromToken, _auth_Token__Output, _auth_UserFromToken__Output>
}
