/**
 * @typedef {Object} ArtistSummary
 * @property {string} id
 * @property {string} name
 * @property {string|null} prefix
 * @property {string} basename
 */

/**
 * @typedef {Object} ArtistResponse
 * @property {string} id
 * @property {string} name
 * @property {string|null} prefix
 * @property {string} basename
 * @property {import("../albums/types.js").AlbumResponse[]} albums
 * @property {number} albumcount
 * @property {import("../songs/types.js").SongsResponse[]} songs
 * @property {number} songcount
 * @property {import("../genres/types.js").GenreResponse[]} genre
 * @property {string} art
 * @property {boolean} has_art
 * @property {boolean} flag
 * @property {number|null} rating
 * @property {number|null} averagerating
 * @property {string|null} mbid
 * @property {string} summary
 * @property {number} time
 * @property {number} yearformed
 * @property {string} placeformed
 */

/**
 * @typedef {Object} ArtistsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {ArtistResponse[]} artist
 */
export {};
