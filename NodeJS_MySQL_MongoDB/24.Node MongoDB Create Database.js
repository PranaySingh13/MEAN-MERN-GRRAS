//Node.js MongoDB Create Database

/**
 * Creating a Database
To create a database in MongoDB, start by creating a MongoClient object, then specify a connection URL with the correct ip address and the name of the database you want to create.

MongoDB will create the database if it does not exist, and make a connection to it.

Example
Create a database called "mymongodb"
 */

//27017 is the default port number in mongodb
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mymongodb";

MongoClient.connect(url, function (error, database) {
  if (error) throw error;
  console.log("Database Created!");
  database.close();
});

/**
 * Important: In MongoDB, a database is not created until it gets content!

MongoDB waits until you have created a collection (table), with at least one document (record) before it actually creates the database (and collection).
 */
