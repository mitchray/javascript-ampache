/**
 * @typedef {Object} UserSummary
 * @property {import("../base.js").UID} id
 * @property {string} username
 */

/**
 * @typedef {Object} UserResponse
 * @property {import("../base.js").UID} id
 * @property {string} username
 * @property {string} auth
 * @property {string} email
 * @property {number} access
 * @property {string|null} streamtoken
 * @property {number} fullname_public
 * @property {string|null} validation
 * @property {boolean} disabled
 * @property {number} create_date
 * @property {number} last_seen
 * @property {string|null} website
 * @property {string|null} state
 * @property {string|null} city
 */

/**
 * @typedef {Object} UsersResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {UserResponse[]} user
 */

/**
 * @typedef {Object} ActivityResponse
 * @property {import("../base.js").UID} id
 * @property {number} date
 * @property {string} object_type
 * @property {import("../base.js").UID} object_id
 * @property {string} action
 * @property {UserSummary} user
 */
export {};
