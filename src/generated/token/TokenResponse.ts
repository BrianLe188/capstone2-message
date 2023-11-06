// Original file: auth/token.proto

import type { Token as _token_Token, Token__Output as _token_Token__Output } from '../token/Token';

export interface TokenResponse {
  'token'?: (_token_Token | null);
  'error'?: (string);
  'response'?: "token"|"error";
}

export interface TokenResponse__Output {
  'token'?: (_token_Token__Output | null);
  'error'?: (string);
  'response': "token"|"error";
}
