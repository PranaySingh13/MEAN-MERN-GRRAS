//What are Middlewares ?

/**
 * An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

Middleware functions can perform the following tasks:

Execute any code.
Make changes or filter to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
 */

const express = require("express");
const app = express();

//Middleware Function
const reqFilters = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please Provide age");
  } else if (req.query.age < 18) {
    resp.send("You Cannot access this page");
  } else {
    next(); //to pass control to the next middleware function.
  }
};

//This is application level middleware so its applied all over application URLs.
app.use(reqFilters);

app.get("/", (req, resp, next) => {
  console.log("Request Type: " + req.method);
  resp.send("Welcome To Home Page");
  next();
});

app.get("/user", (req, resp) => {
  resp.send("Welcome To User Page");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome To About Us Page");
});
app.listen(8080);

/**
 * Middleware Types
 *
 * 1. Application Level Middleware
 * 2. Router Level Middleware
 * 3. Error Handling Middleware
 * 4. Built In Middleware
 * 5. Third Party Middleware
 */

/**
 * Application-level middleware
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

app.use(function (req, res, next) {
  console.log("Time:" + Date.now());
  next();
});
 */
