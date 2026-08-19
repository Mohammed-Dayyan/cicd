const request = require("supertest");
const app = require("../src/app");
const { mockFetchOk, mockFetchFail } = require("./helpers");

describe("GET /api/posts", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns posts from the upstream API", async () => {
    const mockPosts = [{ id: 1, title: "Hello" }];
    mockFetchOk(mockPosts);

    const res = await request(app).get("/api/posts");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockPosts);
    expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/posts");
  });

  it("returns 502 when the upstream API fails", async () => {
    mockFetchFail();

    const res = await request(app).get("/api/posts");

    expect(res.status).toBe(502);
    expect(res.body).toEqual({ error: "Upstream API failed" });
  });
});
