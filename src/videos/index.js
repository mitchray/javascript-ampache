/**
 * @typedef {Object} VideoResponse
 * @property {import("../base.js").UID} id
 * @property {string} title
 * @property {string} mime
 * @property {string} resolution
 * @property {number} size
 * @property {import("../genres/index.js").GenreSummary[]} genre
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

export const videosMethods = {
  /**
   * Get videos
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("../base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<VideosResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#videos}
   */
  videos(params) {
    return this.call("videos", params);
  },

  /**
   * This returns a single video
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<VideoResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#video}
   */
  video(params) {
    return this.call("video", params);
  },

  /**
   * This returns video objects that have been deleted
   * @param {Object} [params]
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<DeletedVideosResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#deleted_videos}
   */
  deletedVideos(params) {
    return this.call("deleted_videos", params);
  },
};
