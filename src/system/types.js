/**
 * @typedef {import("../songs/types.js").SongResponse|import("../albums/types.js").AlbumResponse|import("../artists/types.js").ArtistResponse|import("../playlists/types.js").PlaylistResponse|import("../podcasts/types.js").PodcastResponse|import("../podcasts/types.js").PodcastEpisodeResponse|import("../live-streams/types.js").LiveStreamResponse} IndexType
 */

/**
 * @typedef {import("../songs/types.js").SongResponse|import("../albums/types.js").AlbumResponse|import("../artists/types.js").ArtistResponse|import("../videos/types.js").VideoResponse|import("../playlists/types.js").PlaylistResponse|import("../podcasts/types.js").PodcastResponse|import("../podcasts/types.js").PodcastEpisodeResponse} StatsType
 */

/**
 * @typedef {Object} IndexEntry
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string} prefix
 * @property {string} basename
 */

/**
 * @typedef {Object} NowPlayingResponse
 * @property {import("../base.js").UID} id
 * @property {"song"|"podcast_episode"|"video"} type
 * @property {string} client
 * @property {number} expire
 * @property {import("../users/types.js").UserSummary} user
 */

/**
 * @typedef {Object} RuleResponse
 * @property {string} name
 * @property {string} label
 * @property {string} type
 * @property {string} title
 * @property {string[]} widget
 */
export {};
