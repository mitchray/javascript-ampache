/**
 * @typedef {Object} AlbumSummary
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string|null} prefix
 * @property {string} basename
 */

/**
 * @typedef {Object} AlbumResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string|null} prefix
 * @property {string} basename
 * @property {import("../artists/types.js").ArtistSummary} artist
 * @property {import("../artists/types.js").ArtistSummary[]} artists
 * @property {import("../artists/types.js").ArtistSummary[]} songartists
 * @property {number} time
 * @property {number|string} year
 * @property {import("../songs/types.js").SongResponse[]} [tracks]
 * @property {number} songcount
 * @property {number} disccount
 * @property {string|null} type
 * @property {import("../genres/types.js").GenreSummary[]} genre
 * @property {string} art
 * @property {boolean} has_art
 * @property {boolean} flag
 * @property {number|null} rating
 * @property {number|null} averagerating
 * @property {string|null} mbid
 */

/**
 * @typedef {Object} AlbumsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {AlbumResponse[]} album
 */
export {};
