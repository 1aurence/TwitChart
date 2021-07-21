require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");
const Twit = require("twit");

const T = new Twit({
  consumer_key: process.env["CONSUMER-KEY"],
  consumer_secret: process.env["CONSUMER-SECRET-KEY"],
  access_token: process.env["ACCESS-TOKEN"],
  access_token_secret: process.env["ACCESS-TOKEN-SECRET"],
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

T.get(
  "search/tweets",
  { q: "banana since:2021-07-20", count: 10 },
  function (err, data, response) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(data);
    }
  }
);

// set the view engine to ejs
app.set("view engine", "ejs");

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
