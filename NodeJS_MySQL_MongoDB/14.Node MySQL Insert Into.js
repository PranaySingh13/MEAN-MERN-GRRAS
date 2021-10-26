//Node.js MySQL Insert Into

/**
 * Insert Into Table
To fill a table in MySQL, use the "INSERT INTO" statement.

Example
Insert a record in the "customers" table
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
  console.log("Connected");
  var sql = "INSERT INTO customers(name,address) VALUES ('Pranay','Indore')";
  con.query(sql, function (error, result) {
    if (error) throw error;
    console.log("1 record inserted");
  });
});

/**
 * Insert Multiple Records
To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be replaced by the value array:
 */
con.connect(function (error) {
  if (error) throw error;
  console.log("Connected");

  var sql = "INSERT INTO customers(name,address) VALUES ?";

  var values = [
    ["Apoorva", "Gwalior"],
    ["Abhishek", "Indore"],
    ["Ashutosh", "Mandsaur"],
  ];

  con.query(sql, [values], function (error, result) {
    if (error) throw error;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

/**
 * The Result Object
When executing a query, a result object is returned.

The result object contains information about how the query affected the table.

The result object returned from the example above looks like this:

{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}
 */

/**
 * Get Inserted ID
For tables with an auto increment id field, you can get the id of the row you just inserted by asking the result object.

Note: To be able to get the inserted id, only one row can be inserted.
 */
con.connect(function (error) {
  if (error) throw error;
  console.log("Connected");
  var sql = "INSERT INTO customers(name,address) VALUES ('Amit','Indore')";
  con.query(sql, function (error, result) {
    if (error) throw error;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});
