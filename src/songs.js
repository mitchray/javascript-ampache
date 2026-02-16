/**
 * @typedef {Object} SongResponse
 * @property {import("./base.js").UID} id
 * @property {string} title
 * @property {string} name
 * @property {import("./artists.js").ArtistSummary} artist
 * @property {import("./albums.js").AlbumSummary} album
 * @property {import("./artists.js").ArtistSummary} albumartist
 * @property {number} disk
 * @property {number} track
 * @property {string} filename
 * @property {import("./genres.js").GenreSummary[]} genre
 * @property {number} playlisttrack
 * @property {number} time
 * @property {number|string} year
 * @property {string} format
 * @property {string} stream_format
 * @property {number} rate
 * @property {string} mode
 * @property {string} mime
 * @property {string} stream_mime
 * @property {string} url
 * @property {number} size
 * @property {string|null} mbid
 * @property {string|null} album_mbid
 * @property {string|null} artist_mbid
 * @property {string} art
 * @property {boolean} has_art
 * @property {boolean} flag
 * @property {number|null} rating
 * @property {number|null} averagerating
 * @property {number} playcount
 * @property {number} catalog
 * @property {string} composer
 * @property {number|null} channels
 * @property {string} comment
 * @property {string|null} license
 * @property {string} publisher
 * @property {string} language
 * @property {string} lyrics
 * @property {number|null} replaygain_album_gain
 * @property {number|null} replaygain_album_peak
 * @property {number|null} replaygain_track_gain
 * @property {number|null} replaygain_track_peak
 * @property {number|null} r128_album_gain
 * @property {number|null} r128_track_gain
 */

/**
 * @typedef {Object} SongsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {SongResponse[]} song
 */

/**
 * @typedef {Object} DeletedSongResponse
 * @property {import("./base.js").UID} id
 * @property {number} addition_time
 * @property {number} delete_time
 * @property {number} update_time
 * @property {string} title
 * @property {string} file
 * @property {import("./base.js").UID} catalog
 * @property {number} total_count
 * @property {number} total_skip
 * @property {import("./base.js").UID} album
 * @property {import("./base.js").UID} artist
 */

/**
 * @typedef {Object} DeletedSongsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {DeletedSongResponse[]} deleted_song
 */

import qs from "querystringify";

export const songsMethods = {
  /**
   * Returns songs based on the specified filter
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("./base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#songs}
   */
  songs(params) {
    return this.call("songs", params);
  },

  /**
   * Returns a single song
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @returns {Promise<SongResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#song}
   */
  song(params) {
    return this.call("song", params);
  },

  /**
   * Songs of the specified artist
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {import("./base.js").BinaryBoolean} [params.top50] 0, 1 (if true filter to the artist top 50)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#artist_songs}
   */
  artistSongs(params) {
    return this.call("artist_songs", params);
  },

  /**
   * Songs of the specified album
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#album_songs}
   */
  albumSongs(params) {
    return this.call("album_songs", params);
  },

  /**
   * Songs of the specified genre
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#genre_songs}
   */
  genreSongs(params) {
    return this.call("genre_songs", params);
  },

  /**
   * This returns the songs for a playlist
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {import("./base.js").BinaryBoolean} [params.random] 0, 1 (if true get random songs using limit)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist_songs}
   */
  playlistSongs(params) {
    return this.call("playlist_songs", params);
  },

  /**
   * This returns the songs for a license
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#license_songs}
   */
  licenseSongs(params) {
    return this.call("license_songs", params);
  },

  /**
   * Delete an existing song. (if you are allowed to)
   * @remarks MINIMUM_API_VERSION=5.0.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of song to delete
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#song_delete}
   */
  songDelete(params) {
    return this.call("song_delete", params);
  },

  /**
   * Get the full song file tags using VaInfo
   * This is used to get tags for remote catalogs to allow maximum data to be returned
   * @remarks MINIMUM_API_VERSION=6.7.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of song to fetch
   * @returns {Promise<*>}
   * @see {@link https://ampache.org/api/api-json-methods#song_tags}
   */
  songTags(params) {
    return this.call("song_tags", params);
  },

  /**
   * Return database lyrics or search with plugins by song id
   * @remarks MINIMUM_API_VERSION=6.7.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter Song id to find
   * @param {import("./base.js").BinaryBoolean} [params.plugins] 0, 1, if false disable plugin lookup (default: 1)
   * @returns {Promise<*>}
   * @see {@link https://ampache.org/api/api-json-methods#get_lyrics}
   */
  getLyrics(params) {
    return this.call("get_lyrics", params);
  },

  /**
   * This takes a URL and returns the song object in question
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} [params.url] Full Ampache URL from server (deprecated in 7.9.0+, use filter)
   * @param {string} [params.filter] Alias of url (Ampache 7.9.0+)
   * @returns {Promise<SongResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#url_to_song}
   */
  urlToSong(params) {
    let query = "url_to_song";
    const out = { ...params };
    if (out.url != null) out.url = encodeURIComponent(out.url);
    query += qs.stringify(out, "&");
    return this.request(query);
  },

  /**
   * This searches the songs and returns... songs
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.filter Filter results to match this string
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#search_songs}
   */
  searchSongs(params) {
    return this.call("search_songs", params);
  },

  /**
   * Returns songs that have been deleted from the server
   * @remarks MINIMUM_API_VERSION=500000
   * @param {Object} [params]
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<DeletedSongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#deleted_songs}
   */
  deletedSongs(params) {
    return this.call("deleted_songs", params);
  },
};
