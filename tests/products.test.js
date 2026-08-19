const request = require("supertest");
const app = require("../src/app");
const { mockFetchOk, mockFetchFail } = require("./helpers");

describe("GET /api/products", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns products from the upstream API", async () => {
    const mockProducts = { products: [{ id: 1, title: "Laptop" }] };
    mockFetchOk(mockProducts);

    const res = await request(app).get("/api/products");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockProducts);
    expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products");
  });

  it("returns 502 when the upstream API fails", async () => {
    mockFetchFail();

    const res = await request(app).get("/api/products");

    expect(res.status).toBe(502);
    expect(res.body).toEqual({ error: "Upstream API failed" });
  });
});
