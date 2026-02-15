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

export const genresMethods = {
  /**
   * This returns the genres (Tags) based on the specified filter
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.filter] UID to find
   * @param {import("../base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<GenresResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#genres}
   */
  genres(params) {
    return this.call("genres", params);
  },

  /**
   * This returns a single genre based on UID
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<GenreResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#genre}
   */
  genre(params) {
    return this.call("genre", params);
  },
};
