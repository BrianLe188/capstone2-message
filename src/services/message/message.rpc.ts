import { ObjectId } from "mongodb";
import { client } from "../../mongodb";

const database = client.db("capstone2-message");
const roomCollection = database.collection("rooms");
const messageCollection = database.collection("messages");
const QACollection = database.collection("qa");

const CreateConversation = async (call: any, callback: any) => {
  try {
    const data = call.request;
    QACollection.insertOne(data);
    callback(null, { message: "Done" });
  } catch (error) {
    console.log(error);
    callback(null, { error });
  }
};

const GetMessages = async (call: any, callback: any) => {
  try {
    const { target, sender } = call.request;

    let room = await roomCollection.findOne({
      ...(target.length <= 24
        ? { _id: new ObjectId(target) }
        : {
            members: {
              $all: [sender, target],
            },
          }),
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
    console.log(error);
    callback(null, { error });
  }
};

const messageRPC = {
  GetMessages,
  CreateConversation,
};

export default messageRPC;
