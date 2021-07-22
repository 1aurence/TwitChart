require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
  const TestTweetRoutes = require('./routes/TweetRoutes/TestTweetRoutes')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Static Files
app.use(express.static("public"));
// Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

app.use("/tweets", TestTweetRoutes);

// index page
app.get("/", (req, res) => {
  res.render("pages/index");
});

// about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
