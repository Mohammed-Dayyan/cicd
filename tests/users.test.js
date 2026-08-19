const request = require("supertest");
const app = require("../src/app");
const { mockFetchOk, mockFetchFail, mockFetchNetworkError } = require("./helpers");

describe("GET /api/users", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns users from the upstream API", async () => {
    const mockUsers = [{ id: 1, name: "Ada Lovelace" }];
    mockFetchOk(mockUsers);

    const res = await request(app).get("/api/users");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockUsers);
    expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users");
  });

  it("returns 502 when the upstream API fails", async () => {
    mockFetchFail();

    const res = await request(app).get("/api/users");

    expect(res.status).toBe(502);
    expect(res.body).toEqual({ error: "Upstream API failed" });
  });

  it("returns 502 when the network is down", async () => {
    mockFetchNetworkError();

    const res = await request(app).get("/api/users");

    expect(res.status).toBe(502);
  });
});
