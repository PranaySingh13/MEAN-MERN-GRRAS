//Node.js MongoDB Find

/**
 * In MongoDB we use the find and findOne methods to find data in a collection.

Just like the SELECT statement is used to find data in a table in a MySQL database.

Find One
To select data from a collection in MongoDB, we can use the findOne() method.

The findOne() method returns the first occurrence in the selection.

The first parameter of the findOne() method is a query object. In this example we use an empty query object, which selects all documents in a collection (but returns only the first document).

Example
Find the first document in the customers collection
 */

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (error, database) {
  if (error) throw error;
  var dbo = database.db("mymongodb");
  dbo.collection("customers").findOne({}, function (error, result) {
    if (error) throw error;
    console.log(result.name);
    database.close();
  });
});

/**
 * Find All
To select data from a table in MongoDB, we can also use the find() method.

The find() method returns all occurrences in the selection.

The first parameter of the find() method is a query object. In this example we use an empty query object, which selects all documents in the collection.

No parameters in the find() method gives you the same result as SELECT * in MySQL.

Example
Find all documents in the customers collection
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (error, database) {
  if (error) throw error;
  var dbo = database.db("mymongodb");
  dbo
    .collection("customers")
    .find({})
    .toArray(function (error, result) {
      if (error) throw error;
      console.log(result);
      database.close();
    });
});

/**
 * Find Some
The second parameter of the find() method is the projection object that describes which fields to include in the result.

This parameter is optional, and if omitted, all fields will be included in the result.

Example
Return the fields "name" and "address" of all documents in the customers collection
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (error, database) {
  if (error) throw error;
  var dbo = database.db("mymongodb");
  dbo
    .collection("customers")
    .find({}, { projection: { _id: 0, name: 1, address: 1 } })
    .toArray(function (error, result) {
      if (error) throw error;
      console.log(result);
      database.close();
    });
});

/**
 * You are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the _id field). If you specify a field with the value 0, all other fields get the value 1, and vice versa
 
Example
This example will exclude "address" from the result
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (error, database) {
  if (error) throw error;
  var dbo = database.db("mymongodb");
  dbo
    .collection("customers")
    .find({}, { projection: { address: 0 } })
    .toArray(function (error, result) {
      if (error) throw error;
      console.log(result);
      database.close();
    });
});
/**
 * To exclude the _id field, you must set its value to 0.
 */

/**
 * Example
This example will return only the "name" field
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (error, database) {
  if (error) throw error;
  var dbo = database.db("mymongodb");
  dbo
    .collection("customers")
    .find({}, { projection: { _id: 0, name: 1 } })
    .toArray(function (error, result) {
      if (error) throw error;
      console.log(result);
      database.close();
    });
});

/**
 * IMPORTANT
 * Example
You get an error if you specify both 0 and 1 values in the same object (except if one of the fields is the _id field)
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (error, database) {
  if (error) throw error;
  var dbo = database.db("mymongodb");
  dbo
    .collection("customers")
    .find({}, { projection: { name: 1, address: 0 } })
    .toArray(function (error, result) {
      if (error) throw error;
      console.log(result);
      database.close();
    });
});
/**
 * The Result Object
As you can see from the result of the example above, the result can be converted into an array containing each document as an object.

To return e.g. the address of the third document, just refer to the third array object's address property:

Example
Return the address of the third document:

console.log(result[2].address);
 */
