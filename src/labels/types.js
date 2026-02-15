/**
 * @typedef {Object} LabelResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {number} artists
 * @property {string|null} summary
 * @property {string|null} external_link
 * @property {string|null} address
 * @property {string|null} category
 * @property {string|null} email
 * @property {string|null} website
 * @property {import("../base.js").UID} user
 */

/**
 * @typedef {Object} LabelsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {LabelResponse[]} label
 */
export {};
