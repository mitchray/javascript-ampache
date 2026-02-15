/**
 * @typedef {Object} GenreSummary
 * @property {import("../base.js").UID} id
 * @property {string} name
 */

/**
 * @typedef {Object} GenreResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {number} albums
 * @property {number} artists
 * @property {number} songs
 * @property {number} videos
 * @property {number} playlists
 * @property {number} live_streams
 * @property {boolean} is_hidden
 * @property {GenreSummary[]} merge
 */

/**
 * @typedef {Object} GenresResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {GenreResponse[]} genre
 */
export {};
