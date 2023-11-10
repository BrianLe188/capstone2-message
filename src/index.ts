import dotenv from "dotenv";
dotenv.config();
import { exit } from "process";
import amqp from "amqplib";
import queue from "./queue";
import { loadSync } from "@grpc/proto-loader";
import { MESSAGE_PROTO_PATH } from "./protos";
import {
  Server,
  ServerCredentials,
  loadPackageDefinition,
} from "@grpc/grpc-js";
import { ProtoGrpcType } from "./generated/message";
import messageRPC from "./services/message/message.rpc";
import { client } from "./mongodb";

const packageDefinition = loadSync(MESSAGE_PROTO_PATH);

const service = loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

if (process.env.MESSAGE_MONGODB_URL) {
  async function main() {
    const server = new Server();

    try {
      const database = client.db("capstone2-message");
      const amqpConnection = await amqp.connect("amqp://127.0.0.1");
      const channel = await amqpConnection.createChannel();
      queue({ channel, database });

      console.log(`Message Service is running`);
      server.addService(service.message.Message.service, {
        ...messageRPC,
      });
      if (process.env.MESSAGE_GRPC) {
        server.bindAsync(
          process.env.MESSAGE_GRPC,
          ServerCredentials.createInsecure(),
          () => {
            server.start();
            console.log(`Message is running on ${process.env.MESSAGE_GRPC}`);
          }
        );
      }
    } catch (error) {
      client.close();
      setInterval(() => {
        main();
      }, 1000);
    }
  }
  main();
} else {
  exit(1);
}
