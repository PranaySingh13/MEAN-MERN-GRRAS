// EJs Template Engine

/**
 * A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
 *
 * Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.
 *
 * EJs is mostly used.
 * 
 * Installation
$ npm install ejs
 */

const express = require("express");
const path = require("path");

const app = express();

/**
 * Also add following code in EJs Template Engine.js so we can load all the html,css and javacript files from the publicDemo folder.
 */

const publicPath = path.join(__dirname, "publicDemo");

//Specify the render engine that is Setting Ejs Template Engine
/**
 * And to render the EJs Template Engine.ejs, we need to use the render method of the response object and pass the name of the ejs file without providing the .ejs extension.
Express will automatically search for the file with .ejs extension inside the default views directory
 */
app.set("view engine", "ejs");

//Rendering page from EJs Template
app.get("/profile", (request, response) => {
  const user = {
    name: "Pranay",
    age: 28,
    skills: ["Java", "Javascript", "GIT"],
  };
  response.render(`profile`, { user });
});

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
