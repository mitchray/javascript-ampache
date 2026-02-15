/**
 * @typedef {Object} VideoResponse
 * @property {import("../base.js").UID} id
 * @property {string} title
 * @property {string} mime
 * @property {string} resolution
 * @property {number} size
 * @property {import("../genres/types.js").GenreSummary[]} genre
 * @property {number} time
 * @property {string} url
 * @property {string} art
 * @property {boolean} has_art
 * @property {boolean} flag
 * @property {number|null} rating
 * @property {number|null} averagerating
 * @property {number} playcount
 */

/**
 * @typedef {Object} VideosResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {VideoResponse[]} video
 */

/**
 * @typedef {Object} DeletedVideoResponse
 * @property {import("../base.js").UID} id
 * @property {number} addition_time
 * @property {number} delete_time
 * @property {string} title
 * @property {string} file
 * @property {import("../base.js").UID} catalog
 * @property {number} total_count
 * @property {number} total_skip
 */

/**
 * @typedef {Object} DeletedVideosResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {DeletedVideoResponse[]} deleted_video
 */
export {};
