import { ObjectId } from "mongodb";
import { client } from "../../mongodb";

const database = client.db("capstone2-message");
const roomCollection = database.collection("rooms");
const messageCollection = database.collection("messages");

const GetMessages = async (call: any, callback: any) => {
  try {
    const { target, sender } = call.request;
    let room = await roomCollection.findOne({
      _id: new ObjectId(target),
    });
    if (!room) {
      room = await roomCollection.findOne({
        members: {
          $all: [sender, target],
        },
      });
    }
    const messages = await messageCollection
      .find({
        room: room?._id.toString(),
      })
      .toArray();
    callback(null, { messages: { data: messages } });
  } catch (error) {
    callback(null, { error });
  }
};

const messageRPC = {
  GetMessages,
};

export default messageRPC;
