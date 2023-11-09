import { Channel, Message } from "amqplib";
import { Db, ObjectId } from "mongodb";
import authService from "../services/auth/auth.service";

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
  const connectRoomQueue = "connect_room_queue";
  const sendBackRoomQueue = "send_back_room_queue";
  const roomQueue = "room_queue";
  const sendBackRoomsQueue = "send_back_rooms_queue";

  await channel.assertExchange(messageExchange, "direct");
  await channel.assertQueue(messageQueue);
  await channel.bindQueue(messageQueue, messageExchange, "write");
  await channel.assertQueue(roomQueue);
  await channel.bindQueue(roomQueue, messageExchange, "get_my_room");

  await channel.assertQueue(connectRoomQueue);
  await channel.assertQueue(sendBackRoomQueue);
  await channel.assertQueue(sendBackRoomsQueue);

  channel.consume(
    messageQueue,
    (msg) => {
      if (msg) {
        const data = JSON.parse(msg.content.toString());
        messageCollection.insertMany(data);
      }
    },
    {
      noAck: true,
    }
  );

  channel.consume(
    roomQueue,
    async (msg) => {
      if (msg) {
        const { me } = JSON.parse(msg.content.toString());
        const rooms = await roomCollection
          .find({
            members: {
              $in: [me],
            },
          })
          .toArray();
        const mappedRooms = await Promise.all(
          rooms.map(async (item) => {
            const notme = await Promise.all(
              item.members.map(async (mem: string) => {
                if (mem === me) {
                  return null;
                }
                const memEntity = await authService.getUserById({
                  params: { id: mem },
                });
                return memEntity;
              })
            );
            return {
              ...item,
              realName: notme
                .reduce((prev, next) => {
                  let result = prev;
                  if (next?.fullName) {
                    result = result + next?.fullName + " ";
                  }
                  return result;
                }, "")
                .trim(),
              members: notme,
            };
          })
        );
        channel.sendToQueue(
          sendBackRoomsQueue,
          Buffer.from(JSON.stringify({ rooms: mappedRooms || [], me }))
        );
      }
      channel.ack(msg as Message);
    },
    {
      noAck: false,
    }
  );

  channel.consume(
    connectRoomQueue,
    async (msg) => {
      if (msg) {
        const { sender, receiver, roomId, back, extend } = JSON.parse(
          msg.content.toString()
        );
        let filter = {};
        let room: any = null;
        if (roomId) {
          filter = {
            _id: new ObjectId(roomId),
          };
        } else {
          filter = {
            members: {
              $all: [sender, receiver],
            },
          };
        }
        room = await roomCollection.findOne(filter, {
          projection: {
            _id: 1,
          },
        });
        if (!room) {
          room = await roomCollection
            .insertOne({
              name: `${sender}_${receiver}`,
              members: [sender, receiver],
            })
            .then((data) => ({
              _id: data.insertedId,
            }));
        }
        channel.sendToQueue(
          sendBackRoomQueue,
          Buffer.from(JSON.stringify({ room, back, extend, sender }))
        );
      }
      channel.ack(msg as Message);
    },
    {
      noAck: false,
    }
  );
};

export default queue;
