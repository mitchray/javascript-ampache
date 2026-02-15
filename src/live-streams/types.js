/**
 * @typedef {Object} LiveStreamResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string} url
 * @property {string} codec
 * @property {import("../base.js").UID} catalog
 * @property {string} site_url
 */

/**
 * @typedef {Object} LiveStreamsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {LiveStreamResponse[]} live_stream
 */
export {};
