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
  showSearchTweetsPage(req, res) {
    res.render("../views/pages/search_tweets");
  },
  searchTweets(req, res) {
    const { keyword, amount } = req.body;

    T.get("search/tweets", { q: keyword, count: amount })
      .then((result) => {
        let data = result.data.statuses;
        res.render("pages/search_results", { data: result.data.statuses });
      })
      .catch((err) => console.log(err));
  },

  showCompareTweetsPage(req, res) {
    res.render("../views/pages/compare_tweets");
  },
  compareTweets(req, res) {},
};
