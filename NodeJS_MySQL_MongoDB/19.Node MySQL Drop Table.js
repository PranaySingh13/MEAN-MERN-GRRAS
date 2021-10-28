//Node.js MySQL Drop Table

/**
 * Delete a Table
You can delete an existing table by using the "DROP TABLE" statement:

Example
Delete the table "customers1"
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
//   var sql = "DROP TABLE customers1";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });
/**
 * Drop Only if Exist
If the the table you want to delete is already deleted, or for any other reason does not exist, you can use the IF EXISTS keyword to avoid getting an error.

Example
Delete the table "customers1" if it exists
 */
/**
 * If the table exist, the result object will look like this:

{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

If the table does not exist, the result object will look like this:

{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 1,
  message: '',
  protocol41: true,
  changedRows: 0
}
As you can see the only differnce is that the warningCount property is set to 1 if the table does not exist.
 */
var sql = "DROP TABLE IF EXISTS customers1";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result.warningCount);
});
