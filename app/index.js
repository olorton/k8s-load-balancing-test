const express = require("express");
const app = express();
const rand_id = Math.floor((Math.random() * 899999999999) + 1) + 100000000000;

app.listen(3000, function () {
  console.log("listening on 3000, app id: " + rand_id);
});

app.get("/", (req, res) => {
  res.send("App id: " + rand_id);
});
