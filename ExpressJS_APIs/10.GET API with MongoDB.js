const express = require("express");
const app = express();
const dbConnect = require("./mongodbConfig");

/**
 * Purpose of await is resolve promises, data return promise here,  that's why await is used
 */
app.get("/", async (request, response) => {
  let data = await dbConnect();
  result = await data.find().toArray();
  response.send(result);
});

app.listen(8080);
