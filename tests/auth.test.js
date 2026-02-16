import nock from "nock";
import { createApi, mockJsonRequest, mockGetQueryString, BASE_URL, SESSION_KEY } from "./helpers.js";

describe("Auth", () => {
  it("handshake()", async () => {
    const authResponse = { auth: "new-session-key", api: "6.6.8" };
    mockGetQueryString((q) => q.action === "handshake", authResponse);
    const api = createApi();
    const result = await api.handshake({ auth: "apikey" });
    expect(result).toEqual(authResponse);
    expect(api.sessionKey).toBe("new-session-key");
  });

  it("handshake() with user and timestamp (password auth)", async () => {
    const authResponse = { auth: "new-session-key", api: "6.6.8" };
    mockGetQueryString(
      (q) => q.action === "handshake" && q.user === "alice" && q.timestamp,
      authResponse
    );
    const api = createApi();
    const result = await api.handshake({
      auth: "hashedpassword",
      user: "alice",
      timestamp: 12345,
    });
    expect(result).toEqual(authResponse);
    expect(api.sessionKey).toBe("new-session-key");
  });

  it("ping()", async () => {
    const res = { ping: "pong", auth: "session", api: "6.6.8" };
    mockJsonRequest("ping", res);
    const api = createApi();
    const result = await api.ping();
    expect(result).toEqual(res);
  });

  it("ping() with auth and version extends session", async () => {
    const res = { session_expire: "123", auth: "session", api: "6.6.8" };
    mockJsonRequest("ping", res);
    const api = createApi();
    const result = await api.ping({
      auth: SESSION_KEY,
      version: "6.6.8",
    });
    expect(result).toEqual(res);
  });

  it("goodbye()", async () => {
    const res = { success: "goodbye" };
    mockJsonRequest("goodbye", res);
    const api = createApi();
    const result = await api.goodbye({ auth: SESSION_KEY });
    expect(result).toEqual(res);
  });

  it("lostPassword()", async () => {
    const res = { success: "ok" };
    mockJsonRequest("lost_password", res);
    const api = createApi();
    const result = await api.lostPassword({ auth: "reset-token" });
    expect(result).toEqual(res);
  });

  it("encryptPassword() returns a hex string", () => {
    const api = createApi();
    const result = api.encryptPassword({ password: "secret", time: 12345 });
    expect(typeof result).toBe("string");
    expect(result).toMatch(/^[a-f0-9]+$/i);
  });
});
