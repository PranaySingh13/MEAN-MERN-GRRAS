//seperate file created for db connection to reuse this file multiple times.

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const databaseName = "e-commerce";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(databaseName);
  return db.collection("products");
}

module.exports = dbConnect;
