import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { MessageClient as _message_MessageClient, MessageDefinition as _message_MessageDefinition } from './message/Message';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  message: {
    Conversation: MessageTypeDefinition
    Message: SubtypeConstructor<typeof grpc.Client, _message_MessageClient> & { service: _message_MessageDefinition }
    MessageEntity: MessageTypeDefinition
    MessageR: MessageTypeDefinition
    MessageResponse: MessageTypeDefinition
    Messages: MessageTypeDefinition
    MessagesResponse: MessageTypeDefinition
    RequestEmpty: MessageTypeDefinition
    Target: MessageTypeDefinition
    UpdateMessage: MessageTypeDefinition
  }
}

