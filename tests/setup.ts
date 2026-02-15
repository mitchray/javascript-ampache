/**
 * Use node-fetch so nock can intercept (Node 18+ native fetch uses undici which nock does not intercept).
 * setupFiles runs before test files load, so isomorphic-unfetch will use this when imported.
 */
const nodeFetch = require("node-fetch");
(global as { fetch: typeof nodeFetch }).fetch = nodeFetch;
