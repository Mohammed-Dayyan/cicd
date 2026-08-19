const express = require("express");
const { getWeatherHandler } = require("../controllers/weatherController");

const router = express.Router();

router.get("/", getWeatherHandler);

module.exports = router;
