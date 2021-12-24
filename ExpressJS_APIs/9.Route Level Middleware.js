//Route Level Middleware

/**
 * It can be applied on a single route, multiple routes or all routes in the application.
 */
/**
 * Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

var router = express.Router()
Load router-level middleware by using the router.use() and router.METHOD() functions.
 */

var express = require("express");
var app = express();
var router = express.Router(); //creating router instance

//Calling Middleware Functions from other different file
const reqFilters = require("./middleware");

//For Route Level Middlware Usage
router.use(reqFilters);

app.get("/", (req, resp) => {
  resp.send("Welcome To Home Page");
});

//Single Route level Middleware(That is,It is applied only on this URL)
app.get("/user", reqFilters, (req, resp) => {
  resp.send("Welcome To User Page");
});

//For calling Middleware in multiple URLs, Use router instance rather than app.It can be applied for single Route level also(Alternative Way)
router.get("/about", (req, resp) => {
  resp.send("Welcome To About Us Page");
});

router.get("/contact", (req, resp) => {
  resp.send("Welcome To Contact Us Page");
});

// mount the router on the app
app.use("/", router);

app.listen(8080);

/**
 * Difference between Application and Route Level Middleware
 *
 * Application Level Middleware are applied globally over all application.
 *
 * Route Level Middleware are applied on globally as well as on group or single URLs
 */
