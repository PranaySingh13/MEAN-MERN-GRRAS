const express = require("express");
const app = express();
const dbConnect = require("./mongodbConfig");

app.use(express.json());

app.put("/:xyz", async (request, response) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: request.params.xyz }, //sending dynamically in the route where the data is getting updated
    { $set: request.body } //sending JSON data from postman
  );
  response.send(result);
});

app.listen(8080);
/**
 * result
 * 
 * {
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
 */
