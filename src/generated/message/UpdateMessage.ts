// Original file: message/message.proto

import type { MessageEntity as _message_MessageEntity, MessageEntity__Output as _message_MessageEntity__Output } from '../message/MessageEntity';

export interface UpdateMessage {
  'id'?: (string);
  'body'?: (_message_MessageEntity | null);
}

export interface UpdateMessage__Output {
  'id': (string);
  'body': (_message_MessageEntity__Output | null);
}
