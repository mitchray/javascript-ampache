/**
 * @typedef {Object} PlaylistResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string} owner
 * @property {number} items
 * @property {"public"|"private"} type
 * @property {string} art
 * @property {boolean} has_art
 * @property {boolean} flag
 * @property {number|null} rating
 * @property {number|null} averagerating
 * @property {import("../users/types.js").UserSummary} user
 * @property {boolean} has_access
 * @property {boolean} has_collaborate
 * @property {number} last_update
 */

/**
 * @typedef {Object} PlaylistsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {PlaylistResponse[]} playlist
 */

/**
 * @typedef {Object} HashResponse
 * @property {string} md5
 */
export {};
