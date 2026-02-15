/**
 * @typedef {Object} ShoutResponse
 * @property {import("../base.js").UID} id
 * @property {number} date
 * @property {string} text
 * @property {import("../users/index.js").UserSummary} user
 * @property {"song"|"album"|"artist"|"playlist"} object_type
 * @property {import("../base.js").UID} object_id
 */

export const shoutsMethods = {
  /**
   * This gets the latest posted shouts
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.username] Username to find
   * @param {number} [params.limit] Maximum number of results to return
   * @returns {Promise<{ shout: ShoutResponse[] }>}
   * @see {@link https://ampache.org/api/api-json-methods#last_shouts}
   */
  last_shouts(params) {
    return this.call("last_shouts", params);
  },
};
