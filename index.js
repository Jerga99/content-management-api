
const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/api/resources", (req, res) => {
  res.send("Hello Resources")
})

app.listen(PORT, () => {
  console.log("Server is listening on port:" + PORT);
})
