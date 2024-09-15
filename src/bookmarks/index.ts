import qs from 'querystringify';
import { Bookmark } from './types';
import { Base, BinaryBoolean, Success, UID } from '../base';

export class Bookmarks extends Base {
    /**
     * Get a single bookmark by bookmark_id
     * @remarks MINIMUM_API_VERSION=6.1.0
     * @param params.filter UID to find
     * @param [params.include] 0,1, if true include the object in the bookmark
     * @see {@link https://ampache.org/api/api-json-methods#bookmark}
     */
    async bookmark (params: {
        filter: UID,
        include?: BinaryBoolean,
    }) {
        let query = 'bookmark';
        query += qs.stringify(params, '&');
        return this.request<Bookmark>(query);
    }

    /**
     * Get information about bookmarked media this user is allowed to manage
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @param [params.client] filter by the agent/client name
     * @param [params.include] 0,1, if true include the object in the bookmark
     * @see {@link https://ampache.org/api/api-json-methods#bookmarks}
     */
    async bookmarks (params: {
        client?: string,
        include?: BinaryBoolean,
    }) {
        let query = 'bookmarks';
        query += qs.stringify(params, '&');
        return await this.request<{bookmark: Bookmark[]}>(query);
    }

    /**
     * Get the bookmark from its object_id and object_type.
     * @remarks MINIMUM_API_VERSION=5.0.0
     * @param params.filter UID to find
     * @param params.type Object type
     * @param [params.include] 0,1, if true include the object in the bookmark
     * @see {@link https://ampache.org/api/api-json-methods#get_bookmark}
     */
    getBookmark (params: {
        filter: UID,
        type: 'song' | 'video' | 'podcast_episode',
        include?: BinaryBoolean,
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
     * @param [params.include] 0,1, if true include the object in the bookmark
     * @see {@link https://ampache.org/api/api-json-methods#bookmark_create}
     */
    bookmarkCreate (params: {
        filter: UID,
        type: 'song' | 'video' | 'podcast_episode',
        position: number,
        client?: string,
        date?: number,
        include?: BinaryBoolean,
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
     * @param [params.include] 0,1, if true include the object in the bookmark
     * @see {@link https://ampache.org/api/api-json-methods#bookmark_edit}
     */
    bookmarkEdit (params: {
        filter: UID,
        type: 'song' | 'video' | 'podcast_episode',
        position: number,
        client?: string,
        date?: number,
        include?: BinaryBoolean,
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