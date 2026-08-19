const express = require("express");
const { getUsersHandler } = require("../controllers/usersController");

const router = express.Router();

router.get("/", getUsersHandler);

module.exports = router;
