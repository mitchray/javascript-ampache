/**
 * @typedef {Object} PreferenceResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string} level
 * @property {string} description
 * @property {string} value
 * @property {string} type
 * @property {string} category
 * @property {string|null} subcategory
 * @property {boolean} has_access
 * @property {string} [values]
 */

/**
 * @typedef {Object} PreferencesResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {PreferenceResponse[]} preference
 */
export {};
