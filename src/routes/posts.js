const express = require("express");
const { getPostsHandler } = require("../controllers/postsController");

const router = express.Router();

router.get("/", getPostsHandler);

module.exports = router;
