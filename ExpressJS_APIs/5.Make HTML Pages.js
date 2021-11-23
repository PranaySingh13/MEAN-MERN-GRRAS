//Make HTML Pages
const express = require("express");

//To access path from folder
const path = require("path");
const app = express();

//Load HTML Pages
const publicPath = path.join(__dirname, "publicDemo");

//To load static files we have static method in express
app.use(express.static(publicPath));

app.listen(8080);
