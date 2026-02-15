import qs from "querystringify";
import { Base } from "../base.js";

export class Songs extends Base {
  /**
   * Returns songs based on the specified filter
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("../base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#songs}
   */
  songs(params) {
    let query = "songs";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Returns a single song
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @returns {Promise<import("./types.js").SongResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#song}
   */
  song(params) {
    let query = "song";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Songs of the specified artist
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {import("../base.js").BinaryBoolean} [params.top50] 0, 1 (if true filter to the artist top 50)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#artist_songs}
   */
  artistSongs(params) {
    let query = "artist_songs";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Songs of the specified album
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#album_songs}
   */
  albumSongs(params) {
    let query = "album_songs";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Songs of the specified genre
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#genre_songs}
   */
  genreSongs(params) {
    let query = "genre_songs";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns the songs for a playlist
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {import("../base.js").BinaryBoolean} [params.random] 0, 1 (if true get random songs using limit)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<import("./types.js").SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist_songs}
   */
  playlistSongs(params) {
    let query = "playlist_songs";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns the songs for a license
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#license_songs}
   */
  licenseSongs(params) {
    let query = "license_songs";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Delete an existing song. (if you are allowed to)
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID of song to delete
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#song_delete}
   */
  songDelete(params) {
    let query = "song_delete";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Get the full song file tags using VaInfo
   * This is used to get tags for remote catalogs to allow maximum data to be returned
   * @remarks MINIMUM_API_VERSION=6.7.0
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID of song to fetch
   * @returns {Promise<*>}
   * @see {@link https://ampache.org/api/api-json-methods#song_tags}
   */
  songTags(params) {
    let query = "song_tags";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This takes a URL and returns the song object in question
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.url Full Ampache URL from server
   * @returns {Promise<import("./types.js").SongResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#url_to_song}
   */
  urlToSong(params) {
    let query = "url_to_song";
    params.url = encodeURIComponent(params.url);
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This searches the songs and returns... songs
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.filter Filter results to match this string
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<import("./types.js").SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#search_songs}
   */
  searchSongs(params) {
    let query = "search_songs";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Returns songs that have been deleted from the server
   * @remarks MINIMUM_API_VERSION=500000
   * @param {Object} [params]
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<import("./types.js").DeletedSongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#deleted_songs}
   */
  deletedSongs(params) {
    let query = "deleted_songs";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
