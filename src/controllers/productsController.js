const { getProducts } = require("../services/productsService");

async function getProductsHandler(req, res) {
  try {
    const products = await getProducts();
    res.json(products);
  } catch {
    res.status(502).json({ error: "Upstream API failed" });
  }
}

module.exports = { getProductsHandler };
