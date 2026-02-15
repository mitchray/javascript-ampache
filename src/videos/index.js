import qs from "querystringify";
import { Base } from "../base.js";

export class Videos extends Base {
  /**
   * Get videos
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("../base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<import("./types.js").VideosResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#videos}
   */
  videos(params) {
    let query = "videos";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns a single video
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<import("./types.js").VideoResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#video}
   */
  video(params) {
    let query = "video";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns video objects that have been deleted
   * @param {Object} [params]
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<import("./types.js").DeletedVideosResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#deleted_videos}
   */
  deletedVideos(params) {
    let query = "deleted_videos";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
