import { createApi, mockJsonRequest, SESSION_KEY, BASE_URL } from "./helpers";

/**
 * Integration-style tests: full AmpacheAPI instance with multiple domains.
 */
describe("AmpacheAPI integration", () => {
  it("exposes all domain methods on one instance", () => {
    const api = createApi();
    expect(typeof api.albums).toBe("function");
    expect(typeof api.artists).toBe("function");
    expect(typeof api.handshake).toBe("function");
    expect(typeof api.playlists).toBe("function");
    expect(typeof api.songs).toBe("function");
    expect(typeof api.users).toBe("function");
    expect(typeof api.videos).toBe("function");
    expect(typeof api.ping).toBe("function");
    expect(typeof api.systemUpdate).toBe("function");
  });

  it("setSessionKey updates session", () => {
    const api = createApi();
    expect(api.sessionKey).toBe(SESSION_KEY);
    api.setSessionKey("new-key");
    expect(api.sessionKey).toBe("new-key");
  });

  it("rawURL builds URL without fetching", () => {
    const api = createApi();
    const url = api.rawURL("ping", { version: "6.6.8" });
    expect(url).toContain(BASE_URL);
    expect(url).toContain("action=ping");
    expect(url).toContain("version=6.6.8");
    expect(url).toContain("auth=" + SESSION_KEY);
  });

  it("calls correct endpoint for albums then songs", async () => {
    const api = createApi();
    const albumRes = { album: [{ id: "1" }] };
    const songRes = { song: [{ id: "2" }] };
    mockJsonRequest("albums", albumRes);
    mockJsonRequest("songs", songRes);
    const [a, s] = await Promise.all([api.albums(), api.songs()]);
    expect(a).toEqual(albumRes);
    expect(s).toEqual(songRes);
  });

  it("throws on HTTP error", async () => {
    const api = createApi();
    mockJsonRequest("ping", {}, 500);
    await expect(api.ping()).rejects.toThrow();
  });
});
