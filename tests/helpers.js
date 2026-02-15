const nock = require("nock");
import AmpacheAPI from "../src/index.js";

export const BASE_URL = "http://127.0.0.1:9999";
export const SESSION_KEY = "test-session-key";

/**
 * Create an API instance and optionally scope nock to the base URL.
 * Call mockGet(action, response) to stub a JSON response for that action.
 * @param {Object} [options]
 * @param {boolean} [options.useBearerToken]
 * @returns {import("../src/index.js").default}
 */
export function createApi(options) {
  return new AmpacheAPI({
    url: BASE_URL,
    sessionKey: SESSION_KEY,
    ...options,
  });
}

/**
 * Mock a GET request to the Ampache API that includes the given action in the query string.
 * Returns the nock scope for optional chaining (e.g. .query(true)).
 * @param {string} action
 * @param {object} response
 * @param {number} [statusCode=200]
 */
export function mockJsonRequest(action, response, statusCode = 200) {
  return nock(BASE_URL)
    .get("/server/json.server.php")
    .query((q) => q.action === action)
    .reply(statusCode, response);
}

/**
 * Mock a GET request that matches any action (for handshake or custom URLs).
 * @param {(q: Record<string, string>) => boolean} queryMatcher
 * @param {object} response
 * @param {number} [statusCode=200]
 */
export function mockGetQueryString(queryMatcher, response, statusCode = 200) {
  return nock(BASE_URL)
    .get("/server/json.server.php")
    .query(queryMatcher)
    .reply(statusCode, response);
}

/**
 * @param {string} action
 * @param {Buffer|string} body
 */
export function mockBinaryRequest(action, body) {
  return nock(BASE_URL)
    .get("/server/json.server.php")
    .query((q) => q.action === action)
    .reply(200, body, { "Content-Type": "application/octet-stream" });
}
