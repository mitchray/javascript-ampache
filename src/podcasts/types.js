/**
 * @typedef {Object} PodcastEpisodeResponse
 * @property {import("../base.js").UID} id
 * @property {string} title
 * @property {string} name
 * @property {string} description
 * @property {string} category
 * @property {string} author
 * @property {string} author_full
 * @property {string} website
 * @property {string} pubdate
 * @property {"completed"|"pending"} state
 * @property {string} filelength
 * @property {string} filesize
 * @property {string} filename
 * @property {string} mime
 * @property {number} time
 * @property {number} size
 * @property {number} bitrate
 * @property {number} stream_bitrate
 * @property {number} rate
 * @property {number|null} mode
 * @property {number|null} channels
 * @property {string} public_url
 * @property {string} url
 * @property {import("../base.js").UID} catalog
 * @property {string} art
 * @property {boolean} has_art
 * @property {boolean} flag
 * @property {number|null} rating
 * @property {number|null} averagerating
 * @property {number} playcount
 * @property {number} played
 */

/**
 * @typedef {Object} PodcastResponse
 * @property {import("../base.js").UID} id
 * @property {string} name
 * @property {string} description
 * @property {string} language
 * @property {string} copyright
 * @property {string} feed_url
 * @property {string} generator
 * @property {string} website
 * @property {string} build_date
 * @property {string} sync_date
 * @property {string} public_url
 * @property {string} art
 * @property {boolean} has_art
 * @property {boolean} flag
 * @property {number|null} rating
 * @property {number|null} averaterating
 * @property {PodcastEpisodeResponse[]} podcast_episode
 */

/**
 * @typedef {Object} PodcastsResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {PodcastResponse[]} podcast
 */

/**
 * @typedef {Object} PodcastEpisodesResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {PodcastEpisodeResponse[]} podcast_episode
 */

/**
 * @typedef {Object} DeletedPodcastEpisodeResponse
 * @property {import("../base.js").UID} id
 * @property {number} addition_time
 * @property {number} delete_time
 * @property {string} title
 * @property {string} file
 * @property {import("../base.js").UID} catalog
 * @property {number} total_count
 * @property {number} total_skip
 * @property {import("../base.js").UID} podcast
 */

/**
 * @typedef {Object} DeletedPodcastEpisodesResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {DeletedPodcastEpisodeResponse[]} deleted_podcast_episode
 */
export {};
