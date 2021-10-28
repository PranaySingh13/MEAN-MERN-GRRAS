//Node.js MySQL Limit

/**
 * Limit the Result
You can limit the number of records returned from the query, by using the "LIMIT" statement:

Example
Select the 2 first records in the "customers" table
 */
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mynode",
});

// con.connect(function (err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * Start From Another Position
If you want to return two records, starting from the third record, you can use the "OFFSET" keyword:
 
Note: "OFFSET 2", means starting from the third position, not the second!
*/
// con.connect(function (err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 3 OFFSET 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * Shorter Syntax
You can also write your SQL statement like this "LIMIT 3, 2" which returns the same as the offset example above

Note: The numbers are reversed: "LIMIT 2, 3" is the same as "LIMIT 3 OFFSET 2"
 */
con.connect(function (err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 2, 3";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
