import { MongoClient } from "mongodb";
import { env } from "process";
const uri = `mongodb+srv://talha:${process.env.MONGODB_PASSWORD}@cluster0.srdf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
