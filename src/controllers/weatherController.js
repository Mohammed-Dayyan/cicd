const { getWeather } = require("../services/weatherService");

async function getWeatherHandler(req, res) {
  try {
    const weather = await getWeather();
    res.json(weather);
  } catch {
    res.status(502).json({ error: "Upstream API failed" });
  }
}

module.exports = { getWeatherHandler };
