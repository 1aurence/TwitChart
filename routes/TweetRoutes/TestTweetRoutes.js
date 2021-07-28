const express = require("express");
const router = express.Router();
const TweetController = require("../../controllers/TweetController");

// handle search-tweets routes 
router.get("/length-likes", TweetController.showLengthLkesPage);
router.post("/length-likes", TweetController.compareLengthLikes);

// handle compare-tweets routes
router.get("/compare-tweets", TweetController.showCompareTweetsPage);
router.post("/compare-tweets", TweetController.compareTweets);

module.exports = router;
