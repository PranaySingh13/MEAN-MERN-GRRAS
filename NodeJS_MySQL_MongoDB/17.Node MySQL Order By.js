//Node.js MySQL Order By

/**
 * Sort the Result
Use the ORDER BY statement to sort the result in ascending or descending order.

The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.

Example
Sort the result alphabetically by name
 */
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mynode",
});

con.connect(function (error) {
  if (error) throw error;
  var sql = "SELECT * FROM customers ORDER BY name";
  con.query(sql, function (error, result) {
    if (error) throw error;
    console.log(result);
  });
});

/**
 * ORDER BY DESC
Use the DESC keyword to sort the result in a descending order.

Example
Sort the result reverse alphabetically by name
 */
var sql = "SELECT * FROM customers ORDER BY name DESC";
con.query(sql, function (error, result) {
  if (error) throw error;
  console.log(result);
});
