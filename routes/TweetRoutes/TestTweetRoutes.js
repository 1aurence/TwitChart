const express = require("express");
const router = express.Router();
const TestTweetController = require("../../controllers/TestTweetController");

router.post("", TestTweetController.getTweets);

module.exports = router;
