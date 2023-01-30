const express = require("express");
const port = 3000;

const hostname = "localhost";
const server = express();

const students = [
  {
    id: 1,
    name: "shirt",
    age: 2000,
  },
  {
    id: 1,
    name: "Shoee",
    age: 10,
  },
  {
    id: 1,
    name: "Watch",
    age: 200,
  },
  {
    id: 1,
    name: "Phone",
    age: 1,
  },
];

server.use("/", express.static("public"));

server.get("/api/v1", function (req, res) {
  res.send(students);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
