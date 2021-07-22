const Twit = require("twit");

// instantiate Twit.js
const T = new Twit({
  consumer_key: process.env["CONSUMER_KEY"],
  consumer_secret: process.env["CONSUMER_SECRET"],
  access_token: process.env["ACCESS_TOKEN"],
  access_token_secret: process.env["ACCESS_SECRET"],
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

module.exports = {
  getTweets(req, res) {
    const { keyword, amount } = req.body;

    T.get("search/tweets", { q: keyword, count: amount })
      .then((result) => {
        let data = result.data.statuses;
        for (let i = 0; i < data.length; i++) {
          console.log(data[i])
        }
        res.render("pages/search-results", { data: result.data.statuses });
      })
      .catch((err) => console.log(err));
  },
};
