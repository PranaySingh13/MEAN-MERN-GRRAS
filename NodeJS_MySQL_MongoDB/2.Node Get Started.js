// Node.js Get Started

/*
Download Node.js
The official Node.js website has installation instructions for Node.js: https://nodejs.org
*/

/*
Getting Started
Once you have downloaded and installed Node.js on your computer, let's try to display "Hello World" in a web browser.

Create a Node.js file named "2.Node Get Started.js", and add the following code
*/

var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, "Status Ok", { "Content-Type": "test/html" });
    response.end("Hello World");
  })
  .listen(8080);
/*
Save the file on your computer: C:\Users\Your Name\myfirst.js

The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.

For now, you do not have to understand the code. It will be explained later.
*/

/*
Initiate the Node.js File
The file you have just created must be initiated by Node.js before any action can take place.

Start your command line interface, write node myfirst.js and hit enter

Now, your computer works as a server!

If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!

Start your internet browser, and type in the address: http://localhost:8080
*/
