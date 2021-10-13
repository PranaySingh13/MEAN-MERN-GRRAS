//Node.js File System Module

/**
 * Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:

var fs = require('fs');
Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files
 */

/**
 * Read Files
The fs.readFile() method is used to read files on your computer.

Assume we have the following HTML file (located in the same folder as Node.js)

Create a Node.js file that reads the HTML file, and return the content
 */

var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    fs.readFile("demofile1.html", function (error, data) {
      response.writeHead("200", { "Content-Type": "text/html" });

      response.write(data);
      return response.end();
    });
  })
  .listen(8080);

/**
 * Create Files
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()

The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created
Create a new file using the appendFile() method

The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created

The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
*/

http
  .createServer(function (request, response) {
    fs.appendFile("mynewfile1.text", "Hello Content", function (error) {
      if (error) throw error;
      console.log("Saved!");
    });
    fs.open("mynewfile2.txt", "w", function (err, file) {
      if (err) throw err;
      console.log("Saved!!");
    });
    fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
      if (err) throw err;
      console.log("Saved!!!");
    });
  })
  .listen(8081);

/**
   * Update Files
The File System module has methods for updating files:

fs.appendFile()
fs.writeFile()
The fs.appendFile() method appends the specified content at the end of the specified file

The fs.writeFile() method replaces the specified file and content.
   */

http
  .createServer(function (request, response) {
    fs.appendFile("mynewfile1.text", " This is my text.", function (err) {
      if (err) throw err;
      console.log("Updated!");
    });
    fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
      if (err) throw err;
      console.log("Replaced!");
    });
  })
  .listen(8082);

/**
   * Delete Files
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file
   */
http
  .createServer(function (request, response) {
    fs.unlink("mynewfile2.txt", function (err) {
      if (err) throw err;
      console.log("File deleted!");
    });
  })
  .listen(8083);

/**
 * Rename Files
To rename a file with the File System module,  use the fs.rename() method.

The fs.rename() method renames the specified file */
http
  .createServer(function (request, response) {
    fs.rename("mynewfile1.text", "myrenamedfile.txt", function (err) {
      if (err) throw err;
      console.log("File Renamed!");
    });
  })
  .listen(8084);
