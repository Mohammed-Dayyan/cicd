function mockFetchOk(data) {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => data,
  });
}

function mockFetchFail() {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    status: 500,
  });
}

function mockFetchNetworkError() {
  global.fetch = jest.fn().mockRejectedValue(new Error("network down"));
}

module.exports = { mockFetchOk, mockFetchFail, mockFetchNetworkError };
