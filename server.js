const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});
