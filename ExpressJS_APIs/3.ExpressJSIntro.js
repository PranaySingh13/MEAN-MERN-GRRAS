// Express JS Intro

//Express JS is Web framework of NodeJS.
//Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
//With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
//Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
//Many popular frameworks are based on Express.

/**
 * To install Express Js
 *
 * npm install express
 */

/**
 * Now Firstly Learn to Open the page with the help of Express JS.
 *
 * To Open the page we have get method in the express lib of npm package.In this get method we pass routes and params.
 */
const express = require("express"); //express variable indicating we are using express js library of npm package.
const app = express(); //to make it executable state

//THe first parameter in get method is route address.

//Whatever data comes from client it comes in the request param.
//Whatever data we sent to client goes in the response param.

//For Sending data from client either by the url(http://localhost:8080/?name=Pranay) or postman
app.get("", (request, response) => {
  console.log("Data sent by the browser: ", request.query);
  response.send("Hello! Welcome " + request.query.name + " This is Home Page");
});

app.get("/about", (x, y) => {
  y.send("Hello! Welcome This is About Page");
});

app.get("/help", (req, resp) => {
  resp.send("Hello! Welcome This is Help Page");
});

app.listen(8080);
