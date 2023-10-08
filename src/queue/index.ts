import { Channel } from "amqplib";
import { Db } from "mongodb";

const queue = async ({
  channel,
  database,
}: {
  channel: Channel;
  database: Db;
}) => {
  const messageCollection = database.collection("messages");

  const messageExchange = "message";
  const messageQueue = "message_queue";

  await channel.assertExchange(messageExchange, "direct");
  await channel.assertQueue(messageQueue);
  await channel.bindQueue(messageQueue, messageExchange, "write");

  channel.consume(
    messageQueue,
    (msg) => {
      if (msg?.fields.routingKey === "write") {
        const data = JSON.parse(msg.content.toString());
        messageCollection.insertOne({ ...data, like: 0, dislike: 0 });
      }
    },
    {
      noAck: true,
    }
  );
};

export default queue;
