const express = require("express");
const users = require("./users");
const products = require("./products");
const posts = require("./posts");
const weather = require("./weather");

const router = express.Router();

router.use("/users", users);
router.use("/products", products);
router.use("/posts", posts);
router.use("/weather", weather);

module.exports = router;
