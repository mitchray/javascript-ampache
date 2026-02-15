const nock = require("nock");
import AmpacheAPI from "../src/index";

export const BASE_URL = "http://127.0.0.1:9999";
export const SESSION_KEY = "test-session-key";

/**
 * Create an API instance and optionally scope nock to the base URL.
 * Call mockGet(action, response) to stub a JSON response for that action.
 */
export function createApi(options?: { useBearerToken?: boolean }) {
  return new AmpacheAPI({
    url: BASE_URL,
    sessionKey: SESSION_KEY,
    ...options,
  });
}

/**
 * Mock a GET request to the Ampache API that includes the given action in the query string.
 * Returns the nock scope for optional chaining (e.g. .query(true)).
 */
export function mockJsonRequest(
  action: string,
  response: object,
  statusCode = 200
) {
  return nock(BASE_URL)
    .get("/server/json.server.php")
    .query((q: Record<string, string>) => q.action === action)
    .reply(statusCode, response);
}

/**
 * Mock a GET request that matches any action (for handshake or custom URLs).
 */
export function mockGetQueryString(
  queryMatcher: (q: Record<string, string>) => boolean,
  response: object,
  statusCode = 200
) {
  return nock(BASE_URL)
    .get("/server/json.server.php")
    .query(queryMatcher)
    .reply(statusCode, response);
}

export function mockBinaryRequest(action: string, body: Buffer | string) {
  return nock(BASE_URL)
    .get("/server/json.server.php")
    .query((q: Record<string, string>) => q.action === action)
    .reply(200, body, { "Content-Type": "application/octet-stream" });
}
