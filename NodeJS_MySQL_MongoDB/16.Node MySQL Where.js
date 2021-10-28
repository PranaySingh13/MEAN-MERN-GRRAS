//Node.js MySQL Where

/**
 * Select With a Filter
When selecting records from a table, you can filter the selection by using the "WHERE" statement:

Example
Select record(s) with the address "Park Lane 38"
 */

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mynode",
});

// con.connect(function (error) {
//   if (error) throw error;
//   console.log("Connected!");
//   var sql = "SELECT * FROM customers WHERE address='Indore'";
//   con.query(sql, function (error, result) {
//     if (error) throw error;
//     console.log(result);
//   });
// });

/**
 * Wildcard Characters
You can also select the records that starts, includes, or ends with a given letter or phrase.

Use the '%' wildcard to represent zero, one or multiple characters

Example
Select records where the address starts with the letter 'S'
 */
con.connect(function (error) {
  if (error) throw error;
  console.log("Connected!");
  var sql = "SELECT * FROM customers WHERE address LIKE 'G%'";
  con.query(sql, function (error, result) {
    if (error) throw error;
    console.log(result);
  });
});

/**
 * Escaping Query Values
When query values are variables provided by the user, you should escape the values.

This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.

The MySQL module has methods to escape query values:

Example
Escape query values by using the mysql.escape() method
 */
var adr = "Gwalior";
var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});
/**
 * You can also use a ? as a placeholder for the values you want to escape.

In this case, the variable is sent as the second parameter in the query() method
 */
var adr = "Mandsaur";
var sql = "SELECT * FROM customers WHERE address = ?";
con.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
/**
 * If you have multiple placeholders, the array contains multiple values, in that order
 */
var name = "Abhishek";
var adr = "Indore";
var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
