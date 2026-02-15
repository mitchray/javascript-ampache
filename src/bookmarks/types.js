/**
 * @typedef {Object} BookmarkResponse
 * @property {import("../base.js").UID} id
 * @property {"song"|"video"|"podcast_episode"} type
 * @property {number} position
 * @property {string} [client]
 * @property {number} [date]
 */

/**
 * @typedef {Object} BookmarksResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {BookmarkResponse[]} bookmark
 */
export {};
