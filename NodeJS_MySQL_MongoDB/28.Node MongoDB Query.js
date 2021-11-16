//Node.js MongoDB Query

/**
 * Filter the Result
When finding documents in a collection, you can filter the result by using a query object.

The first argument of the find() method is a query object, and is used to limit the search.

Example
Find documents with the address "Park Lane 38"
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mymongodb");
  var query = { address: "Park Lane 38" };

  dbo
    .collection("customers")
    .find(query)
    .toArray(function (error, result) {
      if (error) throw error;
      console.log(result);
      db.close();
    });
});
/**
 * Filter With Regular Expressions
You can write regular expressions to find exactly what you are searching for.

Regular expressions can only be used to query strings.

To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/:

Example
Find documents where the address starts with the letter "S"
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mymongodb");
  var query = { address: /^S/ };

  dbo
    .collection("customers")
    .find(query)
    .toArray(function (error, result) {
      if (error) throw error;
      console.log(result);
      db.close();
    });
});
