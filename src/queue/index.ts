import { Channel, Message } from "amqplib";
import { Db, ObjectId } from "mongodb";

type ROOM = {
  id: ObjectId;
  name: string;
  members: Array<string>;
};

const queue = async ({
  channel,
  database,
}: {
  channel: Channel;
  database: Db;
}) => {
  const messageCollection = database.collection("messages");
  const roomCollection = database.collection("rooms");

  const messageExchange = "message";
  const messageQueue = "message_queue";
  const connectRoomQueue = "connect_room";

  await channel.assertExchange(messageExchange, "direct");
  await channel.assertQueue(messageQueue);
  await channel.bindQueue(messageQueue, messageExchange, "write");

  await channel.assertQueue(connectRoomQueue);

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

  channel.consume(
    connectRoomQueue,
    async (msg) => {
      if (msg) {
        const { sender, receiver } = JSON.parse(msg.content.toString());
        let room: any = await roomCollection.findOne({
          members: {
            $all: [sender, receiver],
          },
        });
        if (!room) {
          room = await roomCollection.insertOne({
            name: `${sender}_${receiver}`,
            members: [sender, receiver],
          });
        }
      }
      channel.ack(msg as Message);
    },
    {
      noAck: false,
    }
  );
};

export default queue;
