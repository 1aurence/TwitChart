const express = require("express");
const router = express.Router();
const TweetController = require("../../controllers/TweetController");

// handle search-tweets routes 
router.get("/search-tweets", TweetController.showSearchTweetsPage);
router.post("/search-tweets", TweetController.searchTweets);

// handle compare-tweets routes
router.get("/compare-tweets", TweetController.showCompareTweetsPage);
router.post("/compare-tweets", TweetController.compareTweets);

module.exports = router;
