const express = require("express");
const { getProductsHandler } = require("../controllers/productsController");

const router = express.Router();

router.get("/", getProductsHandler);

module.exports = router;
