import qs from "querystringify";
import { Base } from "../base.js";

export class Podcasts extends Base {
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
   * @returns {Promise<import("./types.js").PodcastsResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcasts}
   */
  podcasts(params) {
    let query = "podcasts";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Get information about podcasts
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} [params]
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {"episodes"} [params.include] episodes (include podcast_episodes in the response)
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<import("./types.js").PodcastResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast}
   */
  podcast(params) {
    let query = "podcast";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Create a podcast that can be used by anyone to stream media.
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {string} params.url RSS url for podcast
   * @param {import("../base.js").UID} params.catalog UID of podcast catalog
   * @returns {Promise<import("./types.js").PodcastResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_create}
   */
  podcastCreate(params) {
    let query = "podcast_create";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Update the description and/or expiration date for an existing podcast.
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID to find
   * @param {string} [params.feed] RSS url for podcast
   * @param {string} [params.title] Podcast title
   * @param {string} [params.website] Source website URL
   * @param {string} [params.description] Podcast description
   * @param {string} [params.generator] Podcast generator
   * @param {string} [params.copyright] Podcast copyright
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_edit}
   */
  podcastEdit(params) {
    let query = "podcast_edit";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Delete an existing podcast
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID of podcast to delete
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_delete}
   */
  podcastDelete(params) {
    let query = "podcast_delete";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns the episodes for a podcast
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID of podcast
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @param {string} [params.cond]
   * @param {string} [params.sort]
   * @returns {Promise<import("./types.js").PodcastEpisodesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_episodes}
   */
  podcastEpisodes(params) {
    let query = "podcast_episodes";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Get the podcast_episode from a UID
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID of podcast
   * @returns {Promise<import("./types.js").PodcastEpisodeResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_episode}
   */
  podcastEpisode(params) {
    let query = "podcast_episode";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Delete an existing podcast_episode
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.filter UID of podcast episode to delete
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#podcast_episode_delete}
   */
  podcastEpisodeDelete(params) {
    let query = "podcast_episode_delete";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * Sync and download new podcast episodes
   * ACCESS REQUIRED: 50 (Content Manager)
   * @remarks MINIMUM_API_VERSION=420000
   * @param {Object} params
   * @param {import("../base.js").UID} params.id UID of podcast
   * @returns {Promise<import("../base.js").Success>}
   * @see {@link https://ampache.org/api/api-json-methods#update_podcast}
   */
  updatePodcast(params) {
    let query = "update_podcast";
    query += qs.stringify(params, "&");
    return this.request(query);
  }

  /**
   * This returns the episodes for a podcast that have been deleted
   * @param {Object} [params]
   * @param {number} [params.offset]
   * @param {number} [params.limit]
   * @returns {Promise<import("./types.js").DeletedPodcastEpisodesResponse>}
   * @see {@link https://ampache.org/api/api-json-methods#deleted_podcast_episodes}
   */
  deletedPodcastEpisodes(params) {
    let query = "deleted_podcast_episodes";
    query += qs.stringify(params, "&");
    return this.request(query);
  }
}
