//Node.js MySQL Create Table

/**
 * Creating a Table
To create a table in MySQL, use the "CREATE TABLE" statement.

Make sure you define the name of the database when you create the connection:
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
  var sql = "CREATE TABLE customers(name varchar(255), address varchar(255))";
  con.query(sql, function (error, result) {
    if (error) throw error;
    console.log("Table Created");
  });
});

/**
 * Primary Key
When creating a table, you should also create a column with a unique key for each record.

This can be done by defining a column as "INT AUTO_INCREMENT PRIMARY KEY" which will insert a unique number for each record. Starting at 1, and increased by one for each record.

Example
Create primary key when creating the table
 */

con.connect(function (error) {
  if (error) throw error;
  console.log("Connected");
  var sql =
    "CREATE TABLE customers1(id int(11) AUTO_INCREMENT PRIMARY KEY,name varchar(255), address varchar(255))";
  con.query(sql, function (error, result) {
    if (error) throw error;
    console.log("Customers1 Table Created");
  });
});

/**
 * If the table already exists, use the ALTER TABLE keyword:

Example
Create primary key on an existing table
 */
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});
