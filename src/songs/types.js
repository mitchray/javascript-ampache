/**
 * @typedef {Object} SongResponse
 * @property {import("../base.js").UID} id
 * @property {string} title
 * @property {string} name
 * @property {import("../artists/types.js").ArtistSummary} artist
 * @property {import("../albums/types.js").AlbumSummary} album
 * @property {import("../artists/types.js").ArtistSummary} albumartist
 * @property {number} disk
 * @property {number} track
 * @property {string} filename
 * @property {import("../genres/types.js").GenreSummary[]} genre
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
 * @property {import("../base.js").UID} id
 * @property {number} addition_time
 * @property {number} delete_time
 * @property {number} update_time
 * @property {string} title
 * @property {string} file
 * @property {import("../base.js").UID} catalog
 * @property {number} total_count
 * @property {number} total_skip
 * @property {import("../base.js").UID} album
 * @property {import("../base.js").UID} artist
 */

/**
 * @typedef {Object} DeletedSongsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {DeletedSongResponse[]} deleted_song
 */
export {};
