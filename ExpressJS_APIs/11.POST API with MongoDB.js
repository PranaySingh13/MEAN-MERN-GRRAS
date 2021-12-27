const express = require("express");
const app = express();
const dbConnect = require("./mongodbConfig");

/**
 * The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. Without this you can not access request.body
 */
app.use(express.json()); //After Express JS version 4.6 , body-parser is not used as its deprecated(bodyParser.json()).

app.post("/", async (request, response) => {
  let data = await dbConnect();
  let result = await data.insertMany(request.body); //Sending JSON data from postman
  response.send(result);
});

app.listen(8080);
/** result
 * {
    "acknowledged": true,
    "insertedCount": 2,
    "insertedIds": {
        "0": "61ca3722a90060394f1f56c1",
        "1": "61ca3722a90060394f1f56c2"
    }
}
 */
