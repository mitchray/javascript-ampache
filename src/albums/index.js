import qs from "querystringify";
import { Base } from "../base.js";

export class Albums extends Base {
  /**
   * This returns albums based on the provided search filters
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {number} [params.filter] UID to find
   * @param {import("../base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {"albums"|"songs"} [params.include] albums, songs (include child objects in the response)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").AlbumsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#albums}
   */
  albums(params) {
    let query = "albums";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns a single album based on the UID provided
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {"songs"} [params.include] songs (include child objects in the response)
   * @returns {Promise<import("./types.js").AlbumResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#album}
   */
  album(params) {
    let query = "album";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns the albums of an artist
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {import("../base.js").BinaryBoolean} [params.album_artist] 0, 1 (if true filter for album artists only)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").AlbumsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#artist_albums}
   */
  artistAlbums(params) {
    let query = "artist_albums";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns the albums associated with the genre in question
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {import("../base.js").UID} [params.filter] UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").AlbumsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#genre_albums}
   */
  genreAlbums(params) {
    let query = "genre_albums";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
