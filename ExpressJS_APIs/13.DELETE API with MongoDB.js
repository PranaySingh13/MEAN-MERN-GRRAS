const { response } = require("express");
const express = require("express");
const app = express();
const dbConnect = require("./mongodbConfig");

//To get the Object Id method
const mongodb = require("mongodb");

app.use(express.json());

app.delete("/:id", async (request, response) => {
  let data = await dbConnect();
  // As id is stored in mongodb as _id object so we can not directly delete the _id therefore we need to create instance of object of _id
  // let result = data.deleteOne(_id:request.params.id);
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(request.params.id),
  });
  response.send(result);
});

app.listen(8080);
/**
 * result
 * 
 * {
    "acknowledged": true,
    "deletedCount": 1
}
 */
