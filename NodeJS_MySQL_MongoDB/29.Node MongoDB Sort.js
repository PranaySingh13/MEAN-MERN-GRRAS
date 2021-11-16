//Node.js MongoDB Sort

/**
 * Sort the Result
Use the sort() method to sort the result in ascending or descending order.

The sort() method takes one parameter, an object defining the sorting order.

Example
Sort the result alphabetically by name
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mymongodb");
  var mysort = { name: 1 };
  dbo
    .collection("customers")
    .find()
    .sort(mysort)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});

/**
 * Sort Descending
Use the value -1 in the sort object to sort descending.

{ name: 1 } // ascending
{ name: -1 } // descending

Example
Sort the result reverse alphabetically by name
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mymongodb");
  var mysort = { name: -1 };
  dbo
    .collection("customers")
    .find()
    .sort(mysort)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
