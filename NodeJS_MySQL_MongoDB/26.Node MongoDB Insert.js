//Node.js MongoDB Insert

/**
 * Insert Into Collection
To insert a record, or document as it is called in MongoDB, into a collection, we use the insertOne() method.

A document in MongoDB is the same as a record in MySQL

The first parameter of the insertOne() method is an object containing the name(s) and value(s) of each field in the document you want to insert.

It also takes a callback function where you can work with any errors, or the result of the insertion:

Example
Insert a document in the "customers" collection
 */
var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

Mongoclient.connect(url, function (error, database) {
  if (error) throw error;
  var dbo = database.db("mymongodb");
  var myObj = {
    name: "GK Softwares",
    address: "Indore",
  };
  dbo.collection("customers").insertOne(myObj, function (error, response) {
    if (error) throw error;
    console.log("1 Document inserted");
    database.close();
  });
});
/**
 * Note: If you try to insert documents in a collection that do not exist, MongoDB will create the collection automatically.
 */

/**
 * Insert Multiple Documents
To insert multiple documents into a collection in MongoDB, we use the insertMany() method.

The first parameter of the insertMany() method is an array of objects, containing the data you want to insert.

It also takes a callback function where you can work with any errors, or the result of the insertion:

Example
Insert multiple documents in the "customers" collection
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mymongodb");
  var myobj = [
    { name: "John", address: "Highway 71" },
    { name: "Peter", address: "Lowstreet 4" },
    { name: "Amy", address: "Apple st 652" },
    { name: "Hannah", address: "Mountain 21" },
    { name: "Michael", address: "Valley 345" },
    { name: "Sandy", address: "Ocean blvd 2" },
    { name: "Betty", address: "Green Grass 1" },
    { name: "Richard", address: "Sky st 331" },
    { name: "Susan", address: "One way 98" },
    { name: "Vicky", address: "Yellow Garden 2" },
    { name: "Ben", address: "Park Lane 38" },
    { name: "William", address: "Central st 954" },
    { name: "Chuck", address: "Main Road 989" },
    { name: "Viola", address: "Sideway 1633" },
  ];
  dbo.collection("customers").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
/**
 * The Result Object
When executing the insertMany() method, a result object is returned.

The result object contains information about how the insertion affected the database.

The object returned from the example above looked like this:

{
  result: { ok: 1, n: 14 },
  ops: [
    { name: 'John', address: 'Highway 71', _id: 58fdbf5c0ef8a50b4cdd9a84 },
    { name: 'Peter', address: 'Lowstreet 4', _id: 58fdbf5c0ef8a50b4cdd9a85 },
    { name: 'Amy', address: 'Apple st 652', _id: 58fdbf5c0ef8a50b4cdd9a86 },
    { name: 'Hannah', address: 'Mountain 21', _id: 58fdbf5c0ef8a50b4cdd9a87 },
    { name: 'Michael', address: 'Valley 345', _id: 58fdbf5c0ef8a50b4cdd9a88 },
    { name: 'Sandy', address: 'Ocean blvd 2', _id: 58fdbf5c0ef8a50b4cdd9a89 },
    { name: 'Betty', address: 'Green Grass 1', _id: 58fdbf5c0ef8a50b4cdd9a8a },
    { name: 'Richard', address: 'Sky st 331', _id: 58fdbf5c0ef8a50b4cdd9a8b },
    { name: 'Susan', address: 'One way 98', _id: 58fdbf5c0ef8a50b4cdd9a8c },
    { name: 'Vicky', address: 'Yellow Garden 2', _id: 58fdbf5c0ef8a50b4cdd9a8d },
    { name: 'Ben', address: 'Park Lane 38', _id: 58fdbf5c0ef8a50b4cdd9a8e },
    { name: 'William', address: 'Central st 954', _id: 58fdbf5c0ef8a50b4cdd9a8f },
    { name: 'Chuck', address: 'Main Road 989', _id: 58fdbf5c0ef8a50b4cdd9a90 },
    { name: 'Viola', address: 'Sideway 1633', _id: 58fdbf5c0ef8a50b4cdd9a91 } ],
  insertedCount: 14,
  insertedIds: [
    58fdbf5c0ef8a50b4cdd9a84,
    58fdbf5c0ef8a50b4cdd9a85,
    58fdbf5c0ef8a50b4cdd9a86,
    58fdbf5c0ef8a50b4cdd9a87,
    58fdbf5c0ef8a50b4cdd9a88,
    58fdbf5c0ef8a50b4cdd9a89,
    58fdbf5c0ef8a50b4cdd9a8a,
    58fdbf5c0ef8a50b4cdd9a8b,
    58fdbf5c0ef8a50b4cdd9a8c,
    58fdbf5c0ef8a50b4cdd9a8d,
    58fdbf5c0ef8a50b4cdd9a8e,
    58fdbf5c0ef8a50b4cdd9a8f
    58fdbf5c0ef8a50b4cdd9a90,
    58fdbf5c0ef8a50b4cdd9a91 ]
}
 */
/**
 * The _id Field
If you do not specify an _id field, then MongoDB will add one for you and assign a unique id for each document.

In the example above no _id field was specified, and as you can see from the result object, MongoDB assigned a unique _id for each document.

If you do specify the _id field, the value must be unique for each document

Example
Insert three records in a "products" table, with specified _id fields
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mymongodb");
  var myobj = [
    { _id: 154, name: "Chocolate Heaven" },
    { _id: 155, name: "Tasty Lemon" },
    { _id: 156, name: "Vanilla Dream" },
  ];
  dbo.collection("products").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});
