/**
 * @typedef {Object} PlaylistResponse
 * @property {import("./base.js").UID} id
 * @property {string} name
 * @property {string} owner
 * @property {number} items
 * @property {"public"|"private"} type
 * @property {string} art
 * @property {boolean} has_art
 * @property {boolean} flag
 * @property {number|null} rating
 * @property {number|null} averagerating
 * @property {import("./users.js").UserSummary} user
 * @property {boolean} has_access
 * @property {boolean} has_collaborate
 * @property {number} last_update
 */

/**
 * @typedef {Object} PlaylistsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {PlaylistResponse[]} playlist
 */

/**
 * @typedef {Object} HashResponse
 * @property {string} md5
 */

export const playlistsMethods = {
  /**
   * This returns playlists based on the specified filter
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("./base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {import("./base.js").BinaryBoolean} [params.hide_search] 0, 1 (if true do not include searches/smartlists in the result)
   * @param {import("./base.js").BinaryBoolean} [params.show_dupes] 0, 1 (if true ignore 'api_hide_dupe_searches' setting)
   * @param {import("./base.js").BinaryBoolean} [params.include] 0, 1 (if true include the objects in the playlist)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<PlaylistsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#playlists}
   */
  playlists(params) {
    return this.call("playlists", params);
  },

  /**
   * This returns smartlists based on the specified filter
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
   * @returns {Promise<PlaylistsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#smartlists}
   */
  smartlists(params) {
    return this.call("smartlists", params);
  },

  /**
   * This returns a single playlist
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @returns {Promise<PlaylistResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist}
   */
  playlist(params) {
    return this.call("playlist", params);
  },

  /**
   * This returns a single smartlist
   * @remarks MINIMUM_API_VERSION=6.9.1
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @returns {Promise<PlaylistResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#smartlist}
   */
  smartlist(params) {
    return this.call("smartlist", params);
  },

  /**
   * This returns a user's playlists based on the specified filter
   * @remarks MINIMUM_API_VERSION=6.3.0
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("./base.js").BinaryBoolean} [params.include] 0, 1 (include playlist items)
   * @param {import("./base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<PlaylistsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#user_playlists}
   */
  userPlaylists(params) {
    return this.call("user_playlists", params);
  },

  /**
   * This returns a user's smartlists based on the specified filter
   * @remarks MINIMUM_API_VERSION=6.3.0
   * @param {Object} [params]
   * @param {string} [params.filter] Filter results to match this string
   * @param {import("./base.js").BinaryBoolean} [params.include] 0, 1 (include playlist items)
   * @param {import("./base.js").BinaryBoolean} [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
   * @param {Date} [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
   * @param {Date} [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<PlaylistsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#user_smartlists}
   */
  userSmartlists(params) {
    return this.call("user_smartlists", params);
  },

  /**
   * This creates a new playlist and returns it
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {string} params.name Playlist name
   * @param {"public"|"private"} [params.type] public, private (Playlist type)
   * @returns {Promise<PlaylistResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist_create}
   */
  playlistCreate(params) {
    return this.call("playlist_create", params);
  },

  /**
   * This adds an item to a playlist
   * @remarks MINIMUM_API_VERSION=6.3.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of Playlist
   * @param {import("./base.js").UID} params.id UID of the object to add to playlist
   * @param {"song"|"album"|"artist"|"playlist"} params.type 'song', 'album', 'artist', 'playlist'
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist_add}
   */
  playlistAdd(params) {
    return this.call("playlist_add", params);
  },

  /**
   * This modifies name and type of the playlist.
   * NOTE items and tracks must be sent together and be of equal length.
   * @remarks MINIMUM_API_VERSION=400001
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {string} [params.name] Playlist name
   * @param {"public"|"private"} [params.type] public, private (Playlist type)
   * @param {string} [params.owner] Change playlist owner to the user id (-1 = System playlist)
   * @param {string} [params.items] comma-separated song_id's (replaces existing items with a new id)
   * @param {string} [params.tracks] comma-separated playlisttrack numbers matched to 'items' in order
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist_edit}
   */
  playlistEdit(params) {
    return this.call("playlist_edit", params);
  },

  /**
   * This deletes a playlist
   * @remarks MINIMUM_API_VERSION=380001
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of playlist to delete
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist_delete}
   */
  playlistDelete(params) {
    return this.call("playlist_delete", params);
  },

  /**
   * This deletes a smartlist
   * @remarks MINIMUM_API_VERSION=6.9.1
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of smartlist to delete
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#smartlist_delete}
   */
  smartlistDelete(params) {
    return this.call("smartlist_delete", params);
  },

  /**
   * This adds a song to a playlist
   * @remarks MINIMUM_API_VERSION=380001; CHANGED_IN_API_VERSION=400003
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of Playlist
   * @param {import("./base.js").UID} params.song UID of song to add to playlist
   * @param {import("./base.js").BinaryBoolean} [params.check] 0, 1 Whether to check and ignore duplicates (default = 0)
   * @returns {Promise<import("./base.js").Success>}
   * @deprecated Being removed in 7.0.0. Use `playlist_add` instead.
   * @see {@link https://ampache.org/api/api-json-methods#playlist_add_song}
   */
  playlistAddSong(params) {
    return this.call("playlist_add_song", params);
  },

  /**
   * This remove a song from a playlist
   * @remarks MINIMUM_API_VERSION=380001; CHANGED_IN_API_VERSION=400001
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of Playlist
   * @param {import("./base.js").UID} [params.song] UID of song to remove from playlist
   * @param {number} [params.track] Track number to remove from playlist
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist_remove_song}
   */
  playlistRemoveSong(params) {
    return this.call("playlist_remove_song", params);
  },

  /**
   * Get a list of song JSON, indexes or id's based on some simple search criteria
   * @remarks MINIMUM_API_VERSION=400001; CHANGED_IN_API_VERSION=400002; 'recent' will search for tracks played after 'Popular Threshold' days; 'forgotten' will search for tracks played before 'Popular Threshold' days; 'unplayed' added in 400002 for searching unplayed tracks
   * @param {Object} [params]
   * @param {"recent"|"forgotten"|"unplayed"|"random"} [params.mode] (default = 'random')
   * @param {string} [params.filter] string LIKE matched to song title
   * @param {number} [params.album] UID of album
   * @param {number} [params.artist] UID of artist
   * @param {import("./base.js").BinaryBoolean} [params.flag] 0, 1 (get flagged songs only. default = 0)
   * @param {"song"|"index"|"id"} [params.format] song, index, id (default = 'song')
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<import("./songs.js").SongsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist_generate}
   */
  playlistGenerate(params) {
    return this.call("playlist_generate", params);
  },

  /**
   * This returns the md5 hash for the songs in a playlist
   * @remarks MINIMUM_API_VERSION=6.6.0
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter string UID of Playlist
   * @returns {Promise<HashResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#playlist_hash}
   */
  playlistHash(params) {
    return this.call("playlist_hash", params);
  },
};
