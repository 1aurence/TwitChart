const express = require("express");
const router = express.Router();
const TweetController = require("../../controllers/TweetController");

router.get("/search-tweets", TweetController.showSearchTweetsPage);
router.post("/search-tweets", TweetController.searchTweets);

router.get("/compare-tweets", TweetController.showCompareTweetsPage);
router.post("/compare-tweets", TweetController.compareTweets);

module.exports = router;
