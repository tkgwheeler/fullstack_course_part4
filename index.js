const http = require("http");
const express = require("Express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("<h1> Hellow World Woop Woop</h1>");
});

app.post("/notes", (request, response) => {
  const note = request.body;
  console.log(note);

  response.json(note);
});

const port = 3001;
app.listen(port);
console.log(`Server running on port ${port}`);
