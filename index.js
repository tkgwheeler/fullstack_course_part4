const http = require("http");
const express = require("Express");
const app = express();

app.get("/", (request, response) => {
  response.send("<h1> Hellow World Woop Woop</h1>");
});

const port = 3001;
app.listen(port);
console.log(`Server running on port ${port}`);
