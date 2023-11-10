// Original file: message/message.proto

import type { MessageEntity as _message_MessageEntity, MessageEntity__Output as _message_MessageEntity__Output } from '../message/MessageEntity';

export interface MessageResponse {
  'message'?: (_message_MessageEntity | null);
  'error'?: (string);
  'response'?: "message"|"error";
}

export interface MessageResponse__Output {
  'message'?: (_message_MessageEntity__Output | null);
  'error'?: (string);
  'response': "message"|"error";
}
