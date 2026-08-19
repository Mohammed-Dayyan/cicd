const request = require("supertest");
const app = require("../src/app");
const { mockFetchOk, mockFetchFail } = require("./helpers");

describe("GET /api/weather", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns weather from the upstream API", async () => {
    const mockWeather = { current_weather: { temperature: 18 } };
    mockFetchOk(mockWeather);

    const res = await request(app).get("/api/weather");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockWeather);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("https://api.open-meteo.com/v1/forecast")
    );
  });

  it("returns 502 when the upstream API fails", async () => {
    mockFetchFail();

    const res = await request(app).get("/api/weather");

    expect(res.status).toBe(502);
    expect(res.body).toEqual({ error: "Upstream API failed" });
  });
});
