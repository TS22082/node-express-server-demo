const express = require("express");
const app = express();

app.use("/api", require("./routes/api-routes"));

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});
