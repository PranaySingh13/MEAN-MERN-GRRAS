//Node.js MongoDB Join

/**
 * Join Collections
MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.

The $lookup stage lets you specify which collection you want to join with the current collection, and which fields that should match.

Example
Join the matching "products" document(s) to the "orders" collection
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mymongodb");
  dbo
    .collection("orders")
    .aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "orderdetails",
        },
      },
    ])
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res));
      db.close();
    });
});
/**
 * As you can see from the result above, the matching document from the products collection is included in the orders collection as an array.
 */
