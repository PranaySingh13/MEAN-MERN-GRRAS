// Render HTML and JSON
const express = require("express"); //express variable indicating we are using express js library of npm package.
const app = express(); //to make it executable state
app.get("", (request, response) => {
  response.send(
    `<h1>Hello! Welcome This is Home Page</h1>
    <a href="/about">Go to About page</a><br>
    <a href="/help">Go to Help page</a>`
  );
});

app.get("/about", (x, y) => {
  y.send(`<input type="text" placeholder="username" value="${x.query.name}"">
  <button>Click Me</button>
  <a href="/">Go to Home page</a>`);
});

app.get("/help", (req, resp) => {
  resp.send([
    { name: "Pranay", age: 28 },
    { name: "Apoorva", age: 30 },
  ]);
});

app.listen(8080);
