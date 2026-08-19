const PRODUCTS_URL = "https://dummyjson.com/products";

async function getProducts() {
  const res = await fetch(PRODUCTS_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

module.exports = { getProducts };
