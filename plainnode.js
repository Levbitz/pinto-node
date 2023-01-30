const http = require("http");
var fs = require("fs");

const port = 3000;

const hostname = "localhost";

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/html");
//   response.end(`<h2>Pinto</h2>`);
// });

const server = http.createServer(function (req, res) {
  fs.readFile("./index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
  fs.readFile("./index.css", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(data);
    return res.end();
  });
  fs.readFile("./index.css", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
