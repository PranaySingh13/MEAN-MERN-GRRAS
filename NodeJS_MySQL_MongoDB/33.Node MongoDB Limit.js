//Node.js MongoDB Limit

/**
 * Limit the Result
To limit the result in MongoDB, we use the limit() method.

The limit() method takes one parameter, a number defining how many documents to return.

Example
Limit the result to only return 5 documents
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mymongodb");
  dbo
    .collection("customers")
    .find()
    .limit(5)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
