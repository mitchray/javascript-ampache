/**
 * @typedef {Object} BookmarkResponse
 * @property {import("./base.js").UID} id
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

export const bookmarksMethods = {
  /**
   * Get a single bookmark by bookmark_id
   * @remarks MINIMUM_API_VERSION=6.1.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {import("./base.js").BinaryBoolean} [params.include] 0,1, if true include the object in the bookmark
   * @returns {Promise<BookmarkResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#bookmark}
   */
  bookmark(params) {
    return this.call("bookmark", params);
  },

  /**
   * Get information about bookmarked media this user is allowed to manage
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} [params]
   * @param {string} [params.client] filter by the agent/client name
   * @param {import("./base.js").BinaryBoolean} [params.include] 0,1, if true include the object in the bookmark
   * @returns {Promise<BookmarksResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#bookmarks}
   */
  bookmarks(params) {
    return this.call("bookmarks", params);
  },

  /**
   * Get the bookmark/s from its object_id and object_type.
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {"song"|"video"|"podcast_episode"} params.type Object type
   * @param {import("./base.js").BinaryBoolean} [params.include] 0,1, if true include the object in the bookmark
   * @param {import("./base.js").BinaryBoolean} [params.all]
   * @returns {Promise<BookmarkResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#get_bookmark}
   */
  getBookmark(params) {
    return this.call("get_bookmark", params);
  },

  /**
   * Create a placeholder for the current media that you can return to later.
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {"song"|"video"|"podcast_episode"} params.type Object type
   * @param {number} params.position current track time in seconds
   * @param {string} [params.client] Agent string. (Default: 'AmpacheAPI')
   * @param {number} [params.date] update time (Default: UNIXTIME())
   * @param {import("./base.js").BinaryBoolean} [params.include] 0,1, if true include the object in the bookmark
   * @returns {Promise<BookmarkResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#bookmark_create}
   */
  bookmarkCreate(params) {
    return this.call("bookmark_create", params);
  },

  /**
   * Edit a placeholder for the current media that you can return to later.
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {"bookmark"|"song"|"video"|"podcast_episode"} params.type Object type
   * @param {number} params.position current track time in seconds
   * @param {string} [params.client] Agent string. (Default: 'AmpacheAPI')
   * @param {number} [params.date] update time (Default: UNIXTIME())
   * @param {import("./base.js").BinaryBoolean} [params.include] 0,1, if true include the object in the bookmark
   * @returns {Promise<BookmarkResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#bookmark_edit}
   */
  bookmarkEdit(params) {
    return this.call("bookmark_edit", params);
  },

  /**
   * Delete an existing bookmark. (if it exists)
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {"song"|"video"|"podcast_episode"} params.type Object type
   * @param {string} [params.client] Agent string. (Default: 'AmpacheAPI')
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#bookmark_delete}
   */
  bookmarkDelete(params) {
    return this.call("bookmark_delete", params);
  },
};
