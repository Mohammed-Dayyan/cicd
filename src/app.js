const express = require("express");
const routes = require("./routes");

const app = express();

app.use("/api", routes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = app;
