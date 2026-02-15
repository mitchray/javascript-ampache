/**
 * @typedef {Object} PodcastEpisodeResponse
 * @property {import("./base.js").UID} id
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
 * @property {import("./base.js").UID} catalog
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
 * @property {import("./base.js").UID} id
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
 * @property {import("./base.js").UID} id
 * @property {number} addition_time
 * @property {number} delete_time
 * @property {string} title
 * @property {string} file
 * @property {import("./base.js").UID} catalog
 * @property {number} total_count
 * @property {number} total_skip
 * @property {import("./base.js").UID} podcast
 */

/**
 * @typedef {Object} DeletedPodcastEpisodesResponse
 * @property {number} total_count
 * @property {string} md5
 * @property {DeletedPodcastEpisodeResponse[]} deleted_podcast_episode
 */

export const podcastsMethods = {
  /**
   * Get information about podcasts
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} [params]
   * @param {string} [params.filter] Value is Alpha Match for returned results, may be more than one letter/number
   * @param {"episodes"} [params.include] episodes (include podcast_episodes in the response)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<PodcastsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcasts}
   */
  podcasts(params) {
    return this.call("podcasts", params);
  },

  /**
   * Get information about podcasts
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} [params]
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {"episodes"} [params.include] episodes (include podcast_episodes in the response)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<PodcastResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast}
   */
  podcast(params) {
    return this.call("podcast", params);
  },

  /**
   * Create a podcast that can be used by anyone to stream media.
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {string} params.url RSS url for podcast
   * @param {import("./base.js").UID} params.catalog UID of podcast catalog
   * @returns {Promise<PodcastResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_create}
   */
  podcastCreate(params) {
    return this.call("podcast_create", params);
  },

  /**
   * Update the description and/or expiration date for an existing podcast.
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID to find
   * @param {string} [params.feed] RSS url for podcast
   * @param {string} [params.title] Podcast title
   * @param {string} [params.website] Source website URL
   * @param {string} [params.description] Podcast description
   * @param {string} [params.generator] Podcast generator
   * @param {string} [params.copyright] Podcast copyright
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_edit}
   */
  podcastEdit(params) {
    return this.call("podcast_edit", params);
  },

  /**
   * Delete an existing podcast
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of podcast to delete
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_delete}
   */
  podcastDelete(params) {
    return this.call("podcast_delete", params);
  },

  /**
   * This returns the episodes for a podcast
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of podcast
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<PodcastEpisodesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_episodes}
   */
  podcastEpisodes(params) {
    return this.call("podcast_episodes", params);
  },

  /**
   * Get the podcast_episode from a UID
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of podcast
   * @returns {Promise<PodcastEpisodeResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_episode}
   */
  podcastEpisode(params) {
    return this.call("podcast_episode", params);
  },

  /**
   * Delete an existing podcast_episode
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("./base.js").UID} params.filter UID of podcast episode to delete
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_episode_delete}
   */
  podcastEpisodeDelete(params) {
    return this.call("podcast_episode_delete", params);
  },

  /**
   * Sync and download new podcast episodes
   * ACCESS REQUIRED: 50 (Content Manager)
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("./base.js").UID} params.id UID of podcast
   * @returns {Promise<import("./base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#update_podcast}
   */
  updatePodcast(params) {
    return this.call("update_podcast", params);
  },

  /**
   * This returns the episodes for a podcast that have been deleted
   * @param {Object} [params]
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<DeletedPodcastEpisodesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#deleted_podcast_episodes}
   */
  deletedPodcastEpisodes(params) {
    return this.call("deleted_podcast_episodes", params);
  },
};
