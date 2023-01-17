import qs from 'querystringify';
import { Bookmark } from './types';
import { Base, Success, UID } from '../base';

export class Bookmarks extends Base {
    /**
     * Get information about bookmarked media this user is allowed to manage
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @see {@link https://ampache.org/api/api-json-methods#bookmarks}
     */
    async bookmarks () {
        let query = 'bookmarks';
        let data = await this.request<{bookmark: Bookmark[]}>(query);
        return (data.bookmark) ? data.bookmark : data;
    }

    /**
     * Get the bookmark from it's object_id and object_type.
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @param params.filter UID to find
     * @param params.type Object type
     * @see {@link https://ampache.org/api/api-json-methods#get_bookmark}
     */
    getBookmark (params: {
        filter: UID,
        type: 'song' | 'video' | 'podcast_episode',
    }) {
        let query = 'get_bookmark';
        query += qs.stringify(params, '&');
        return this.request<Bookmark>(query);
    }

    /**
     * Create a placeholder for the current media that you can return to later.
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @param params.filter UID to find
     * @param params.type Object type
     * @param params.position current track time in seconds
     * @param [params.client] Agent string. (Default: 'AmpacheAPI')
     * @param [params.date] update time (Default: UNIXTIME())
     * @see {@link https://ampache.org/api/api-json-methods#bookmark_create}
     */
    bookmarkCreate (params: {
        filter: UID,
        type: 'song' | 'video' | 'podcast_episode',
        position: number,
        client?: string,
        date?: number,
    }) {
        let query = 'bookmark_create';
        query += qs.stringify(params, '&');
        return this.request<Bookmark>(query);
    }

    /**
     * Edit a placeholder for the current media that you can return to later.
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @param params.filter UID to find
     * @param params.type Object type
     * @param params.position current track time in seconds
     * @param [params.client] Agent string. (Default: 'AmpacheAPI')
     * @param [params.date] update time (Default: UNIXTIME())
     * @see {@link https://ampache.org/api/api-json-methods#bookmark_edit}
     */
    bookmarkEdit (params: {
        filter: UID,
        type: 'song' | 'video' | 'podcast_episode',
        position: number,
        client?: string,
        date?: number,
    }) {
        let query = 'bookmark_edit';
        query += qs.stringify(params, '&');
        return this.request<Bookmark>(query);
    }

    /**
     * Delete an existing bookmark. (if it exists)
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @param params.filter UID to find
     * @param params.type Object type
     * @param [params.client] Agent string. (Default: 'AmpacheAPI')
     @see {@link https://ampache.org/api/api-json-methods#bookmark_delete}
     */
    bookmarkDelete (params: {
        filter: UID,
        type: 'song' | 'video' | 'podcast_episode',
        client?: string,
    }) {
        let query = 'bookmark_delete';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }
}