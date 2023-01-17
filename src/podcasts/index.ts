import qs from 'querystringify';
import { Podcast, PodcastEpisode, DeletedPodcastEpisode } from './types';
import { Base, Pagination, Success, UID } from '../base';

export class Podcasts extends Base {
    /**
     * Get information about podcasts
     * @remarks MINIMUM_API_VERSION=420000
     * @param [params.filter] Value is Alpha Match for returned results, may be more than one letter/number
     * @param [params.include] episodes (include podcast_episodes in the response)
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#podcasts}
     */
    async podcasts (params?: {
        filter?: string,
        include?: 'episodes',
    } & Pagination) {
        let query = 'podcasts';
        query += qs.stringify(params, '&');
        let data = await this.request<{podcast: Podcast[]}>(query);
        return (data.podcast) ? data.podcast : data;
    }

    /**
     * Get information about podcasts
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID to find
     * @param [params.include] episodes (include podcast_episodes in the response)
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#podcast}
     */
    async podcast (params?: {
        filter: UID,
        include?: 'episodes',
    } & Pagination) {
        let query = 'podcast';
        query += qs.stringify(params, '&');
        let data = await this.request<{podcast: Podcast[]}>(query);
        return (data.podcast) ? data.podcast : data;
    }

    /**
     * Create a podcast that can be used by anyone to stream media.
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.url RSS url for podcast
     * @param params.catalog UID of podcast catalog
     * @see {@link https://ampache.org/api/api-json-methods#podcast_create}
     */
    podcastCreate (params: {
        url: string,
        catalog: UID,
    }) {
        let query = 'podcast_create';
        query += qs.stringify(params, '&');
        return this.request<Podcast>(query);
    }

    /**
     * Update the description and/or expiration date for an existing podcast.
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID to find
     * @param [params.feed] RSS url for podcast
     * @param [params.title] Podcast title
     * @param [params.website] Source website URL
     * @param [params.description] Podcast description
     * @param [params.generator] Podcast generator
     * @param [params.copyright] Podcast copyright
     * @see {@link https://ampache.org/api/api-json-methods#podcast_edit}
     */
    podcastEdit (params: {
        filter: UID,
        feed?: string,
        title?: string,
        website?: string,
        description?: string,
        generator?: string,
        copyright?: string,
    }) {
        let query = 'podcast_edit';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Delete an existing podcast
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID of podcast to delete
     * @see {@link https://ampache.org/api/api-json-methods#podcast_delete}
     */
    podcastDelete (params: {
        filter: UID
    }) {
        let query = 'podcast_delete';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * This returns the episodes for a podcast
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID of podcast
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#podcast_episodes}
     */
    async podcastEpisodes (params: {
        filter: UID,
    } & Pagination) {
        let query = 'podcast_episodes';
        query += qs.stringify(params, '&');
        let data = await this.request<{podcast_episode: PodcastEpisode[]}>(query);
        return (data.podcast_episode) ? data.podcast_episode : data;
    }

    /**
     * Get the podcast_episode from a UID
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID of podcast
     * @see {@link https://ampache.org/api/api-json-methods#podcast_episode}
     */
    podcastEpisode (params: {
        filter: UID,
    }) {
        let query = 'podcast_episode';
        query += qs.stringify(params, '&');
        return this.request<PodcastEpisode>(query);
    }

    /**
     * Delete an existing podcast_episode
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID of podcast episode to delete
     * @see {@link https://ampache.org/api/api-json-methods#podcast_episode_delete}
     */
    podcastEpisodeDelete (params: {
        filter: UID,
    }) {
        let query = 'podcast_episode_delete';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Sync and download new podcast episodes
     * ACCESS REQUIRED: 50 (Content Manager)
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.id UID of podcast
     * @see {@link https://ampache.org/api/api-json-methods#update_podcast}
     */
    updatePodcast (params: {
        id: UID,
    }) {
        let query = 'update_podcast';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * This returns the episodes for a podcast that have been deleted
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#deleted_podcast_episodes}
     */
    async deletedPodcastEpisodes (params?: {

    } & Pagination) {
        let query = 'deleted_podcast_episodes';
        query += qs.stringify(params, '&');
        let data = await this.request<{deleted_podcast_episode: DeletedPodcastEpisode[]}>(query);
        return (data.deleted_podcast_episode) ? data.deleted_podcast_episode : data;
    }
}