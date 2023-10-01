import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
import { exit } from "process";
import amqp from "amqplib";
import queue from "./queue";

if (process.env.MESSAGE_MONGODB_URL) {
  const client = new MongoClient(process.env.MESSAGE_MONGODB_URL);
  async function main() {
    try {
      const database = client.db("capstone2-message");
      const amqpConnection = await amqp.connect("amqp://127.0.0.1");
      const channel = await amqpConnection.createChannel();
      queue({ channel, database });

      console.log(`Message Service is running`);
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
