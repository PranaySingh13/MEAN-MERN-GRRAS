const http = require("http");
const data = require("./demoData.js");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Conten-Type": "applicationjson" });
    resp.write(JSON.stringify(data));

    resp.end();
  })
  .listen(8080);
