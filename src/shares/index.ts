import qs from 'querystringify';
import { Share } from './types';
import { Base, BinaryBoolean, ExtendedPagination, Success, UID } from '../base';

export class Shares extends Base {
    /**
     * This searches the shares and returns... shares
     * @remarks MINIMUM_API_VERSION=420000
     * @param [params.filter] UID to find
     * @param [params.exact] 0, 1 boolean to match the exact filter string
     * @param [params.offset]
     * @param [params.limit]
     * @param [params.cond]
     * @param [params.sort]
     * @see {@link https://ampache.org/api/api-json-methods#shares}
     */
    async shares (params?: {
        filter?: string,
        exact?: BinaryBoolean,
    } & ExtendedPagination) {
        let query = 'shares';
        query += qs.stringify(params, '&');
        let data = await this.request<{share: Share[]}>(query);
        return (data.share) ? data.share : data;
    }

    /**
     * Return a share from UID
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID to find
     * @see {@link https://ampache.org/api/api-json-methods#share}
     */
    share (params: {
        filter: UID,
    }) {
        let query = 'share';
        query += qs.stringify(params, '&');
        return this.request<Share>(query);
    }

    /**
     * Create a public url that can be used by anyone to stream media.
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID of object you are sharing
     * @param params.type ('song', 'album', 'artist', 'playlist', 'podcast', 'podcast_episode', 'video')
     * @param [params.description] description (will be filled for you if empty)
     * @param [params.expires] days to keep active
     * @see {@link https://ampache.org/api/api-json-methods#share_create}
     */
    shareCreate (params: {
        filter: UID,
        type: 'song' | 'album' | 'artist' | 'playlist' | 'podcast' | 'podcast_episode' | 'video',
        description?: string,
        expires?: number,
    }) {
        let query = 'share_create';
        query += qs.stringify(params, '&');
        return this.request<Share>(query);
    }

    /**
     * Update the description and/or expiration date for an existing share
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID to find
     * @param [params.stream] 0, 1
     * @param [params.download] 0, 1
     * @param [params.expires] days to keep active
     * @param [params.description] description
     * @see {@link https://ampache.org/api/api-json-methods#share_edit}
     */
    shareEdit (params: {
        filter: UID,
        stream?: BinaryBoolean,
        download?: BinaryBoolean,
        expires?: number,
        description?: string,
    }) {
        let query = 'share_edit';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }

    /**
     * Delete an existing share.
     * @remarks MINIMUM_API_VERSION=420000
     * @param params.filter UID of share to delete
     * @see {@link https://ampache.org/api/api-json-methods#share_delete}
     */
    shareDelete (params: {
        filter: UID,
    }) {
        let query = 'share_delete';
        query += qs.stringify(params, '&');
        return this.request<Success>(query);
    }
}