// Remove Extension from URL
const express = require("express");

//To access path from folder
const path = require("path");
const app = express();

//Load HTML Pages
const publicPath = path.join(__dirname, "publicDemo");

app.get("", (request, response) => {
  response.sendFile(`${publicPath}/home.html`);
});

app.get("/aboutUs", (request, response) => {
  response.sendFile(`${publicPath}/about.html`);
});

//* is used when no other above Routes are applied
app.get("*", (request, response) => {
  response.sendFile(`${publicPath}/pageNotFound.html`);
});

app.listen(8080);
