//Node.js MySQL Delete

/**
 * Delete Record
You can delete records from an existing table by using the "DELETE FROM" statement:

Notice the WHERE clause in the DELETE syntax: The WHERE clause specifies which record or records that should be deleted. If you omit the WHERE clause, all records will be deleted!

The Result Object
When executing a query, a result object is returned.

The result object contains information about how the query affected the table.

The result object returned from the example above looks like this

{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 34,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

Example
Delete any record with the address
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
  var sql = "DELETE FROM customers WHERE address = 'Mandsaur'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
