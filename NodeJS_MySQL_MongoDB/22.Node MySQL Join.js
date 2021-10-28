//Node.js MySQL Join

/**
 * Join Two or More Tables
You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement.

 * Note: You can use INNER JOIN instead of JOIN. They will both give you the same result.
 */

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mynode",
});

con.connect(function (err) {
  if (err) throw err;
  var sql =
    "SELECT customers.name AS c_name, product.name AS p_name FROM customers INNER JOIN product ON customers.id=product.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

/**
 * Left Join
If you want to return all customers, no matter if they have a p_name product or not, use the LEFT JOIN statement
 */
con.connect(function (err) {
  if (err) throw err;
  var sql =
    "SELECT customers.name AS c_name, product.name AS p_name FROM customers LEFT JOIN product ON customers.id=product.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

/**
 * Right Join
If you want to return all products, and the customers who have them as their p_name, even if no customers have them as their c_name, use the RIGHT JOIN statement
 */
con.connect(function (err) {
  if (err) throw err;
  var sql =
    "SELECT customers.name AS c_name, product.name AS p_name FROM customers RIGHT JOIN product ON customers.id=product.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
