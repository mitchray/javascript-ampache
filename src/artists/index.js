import qs from "querystringify";
import { Base } from "../base.js";

export class Artists extends Base {
  /**
   * This takes a collection of inputs and returns artist objects
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("../base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {"albums"|"songs"} [params.include] (albums | songs) include child objects in the response
   * @param {import("../base.js").BinaryBoolean} [params.album_artist] 0, 1 (if true filter for album artists only)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").ArtistsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#artists}
   */
  artists(params) {
    let query = "artists";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns a single artist based on the UID of said artist
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {"albums"|"songs"} [params.include] (albums | songs) include child objects in the response
   * @returns {Promise<import("./types.js").ArtistResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#artist}
   */
  artist(params) {
    let query = "artist";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns the artists associated with the genre in question as defined by the UID
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").ArtistsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#genre_artists}
   */
  genreArtists(params) {
    let query = "genre_artists";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns the artists associated with the label in question as defined by the UID
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID of find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").ArtistsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#label_artists}
   */
  labelArtists(params) {
    let query = "label_artists";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
