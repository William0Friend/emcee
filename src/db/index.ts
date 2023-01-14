import { Db, GridFSBucket, MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString);

let db: Db;
let bucket: GridFSBucket;

export const connectToServer = async () => {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    bucket = new GridFSBucket(db);
    console.log("Successfully connected to MongoDB.");
};

const getDb = () => db;

export const getBucket = () => bucket;

export default getDb;
// MongoDB driver given code, basically without the .env file
//
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://william0friend:<password>@cluster0.x9duk6m.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });