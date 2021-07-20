const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");

// set the view engine to ejs
app.set("view engine", "ejs");

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
