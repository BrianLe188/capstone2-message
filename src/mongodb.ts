import { MongoClient } from "mongodb";

export const client = new MongoClient(
  process.env.MESSAGE_MONGODB_URL as string
);
