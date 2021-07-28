const Twit = require("twit");

console.log(process.env["CONSUMER_KEY"]);

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
  showLengthLkesPage(req, res) {
    res.render("../views/pages/length_likes_forum");
  },
  compareLengthLikes(req, res) {
    const { keyword, amount, start_date, end_date } = req.body;
    console.log(start_date);
    T.get("search/tweets", {
      q: keyword,
      count: amount,
      since_id: start_date,
      until: end_date,
    })
      .then((result) => {
        let data = result.data.statuses;
        res.render("pages/length_likes_result", { data: result.data.statuses });
      })
      .catch((err) => console.log(err));
  },

  showCompareTweetsPage(req, res) {
    res.render("../views/pages/compare_tweets");
  },
  compareTweets(req, res) {},
};
