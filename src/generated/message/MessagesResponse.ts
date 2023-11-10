// Original file: message/message.proto

import type { Messages as _message_Messages, Messages__Output as _message_Messages__Output } from '../message/Messages';

export interface MessagesResponse {
  'messages'?: (_message_Messages | null);
  'error'?: (string);
  'response'?: "messages"|"error";
}

export interface MessagesResponse__Output {
  'messages'?: (_message_Messages__Output | null);
  'error'?: (string);
  'response': "messages"|"error";
}
