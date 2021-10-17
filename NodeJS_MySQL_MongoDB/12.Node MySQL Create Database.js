//Node.js MySQL Create Database

/**
 * Creating a Database
To create a database in MySQL, use the "CREATE DATABASE" statement:
 */

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

con.connect(function (error) {
  if (error) throw error;
  console.log("Connected");
  con.query("CREATE DATABASE mynode", function (error, result) {
    if (error) throw error;
    console.log("Database Connected");
  });
});
