/**
 * The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.
 */

module.exports = reqFilters = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please Provide age");
  } else if (req.query.age < 18) {
    resp.send("You Cannot access this page");
  } else {
    next(); //to pass control to the next middleware function.
  }
};
