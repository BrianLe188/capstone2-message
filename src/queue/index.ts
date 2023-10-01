import { Channel } from "amqplib";
import { Db } from "mongodb";

const queue = async ({
  channel,
  database,
}: {
  channel: Channel;
  database: Db;
}) => {
  const messageExchange = "message";
  const messageQueue = "message_queue";

  await channel.assertExchange(messageExchange, "direct");
  await channel.assertQueue(messageQueue);
  await channel.bindQueue(messageQueue, messageExchange, "write");

  channel.consume(messageQueue, (msg) => {
    if (msg?.fields.routingKey === "write") {
      console.log(JSON.parse(msg.content.toString()));
    }
  });
};

export default queue;
