const DEFAULT_LAT = process.env.WEATHER_LAT || "52.52";
const DEFAULT_LON = process.env.WEATHER_LON || "13.41";

async function getWeather() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${DEFAULT_LAT}&longitude=${DEFAULT_LON}&current_weather=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}

module.exports = { getWeather };
