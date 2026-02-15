/**
 * @typedef {Object} ShareResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string} owner
 * @property {boolean} allow_stream
 * @property {boolean} allow_download
 * @property {number} creation_date
 * @property {number} lastvisit_date
 * @property {string} object_type
 * @property {import("../base.js").UID} object_id
 * @property {number} expire_days
 * @property {number} max_counter
 * @property {number} counter
 * @property {string} secret
 * @property {string} public_url
 * @property {string} description
 */

/**
 * @typedef {Object} SharesResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {ShareResponse[]} share
 */
export {};
