import qs from "querystringify";
import { Base } from "../base.js";

export class Genres extends Base {
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
   * @returns {Promise<import("./types.js").GenresResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#genres}
   */
  genres(params) {
    let query = "genres";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns a single genre based on UID
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<import("./types.js").GenreResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#genre}
   */
  genre(params) {
    let query = "genre";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
