//Node.js MongoDB Create Collection

/**
 * A collection in MongoDB is the same as a table in MySQL
 */

/**
 * Creating a Collection
To create a collection in MongoDB, use the createCollection() method:

Example
Create a collection called "customers"
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (error, database) {
  if (error) throw error;
  var dbo = database.db("mymongodb");
  dbo.createCollection("customers", function (error, response) {
    if (error) throw error;
    console.log("Collection Created!");
    database.close();
  });
});

/**
 * Important: In MongoDB, a collection is not created until it gets content!

MongoDB waits until you have inserted a document before it actually creates the collection.
 */
