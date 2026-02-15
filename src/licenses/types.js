/**
 * @typedef {Object} LicenseResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string} description
 * @property {string} external_link
 */

/**
 * @typedef {Object} LicensesResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {LicenseResponse[]} license
 */
export {};
