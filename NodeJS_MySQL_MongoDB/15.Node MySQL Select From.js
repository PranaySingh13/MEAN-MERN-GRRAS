//Node.js MySQL Select From

/**
 * Selecting From a Table
To select data from a table in MySQL, use the "SELECT" statement.

Example
Select all records from the "customers" table, and display the result object:
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
  var sql = "SELECT * FROM customers";
  con.query(sql, function (error, result) {
    if (error) throw error;
    console.log(result);
  });
});

/**
 * Selecting Columns
To select only some of the columns in a table, use the "SELECT" statement followed by the column name.

Example
Select name and address from the "customers" table, and display the return object

The Result Object
As you can see from the result of the example above, the result object is an array containing each row as an object.

To return e.g. the address of the third record, just refer to the third array object's address property

The Fields Object
The third parameter of the callback function is an array containing information about each field in the result.
the fields object is an array containing information about each field as an object.

To return e.g. the name of the second field, just refer to the second array item's name property
 */

con.connect(function (error) {
  if (error) throw error;
  console.log("Connected!");
  var sql = "SELECT name,address FROM CUSTOMERS";
  con.query(sql, function (error, result, fields) {
    if (error) throw error;
    console.log(result);
    console.log(result[1].address);
    console.log(fields);
    console.log(fields[1].name);
  });
});
