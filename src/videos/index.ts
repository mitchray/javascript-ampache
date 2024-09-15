import qs from 'querystringify';
import { Video, DeletedVideo } from './types';
import { Base, BinaryBoolean, Pagination, UID } from '../base';

export class Videos extends Base {
    /**
     * Get videos
     * @remarks MINIMUM_API_VERSION=380001
     * @param [params.filter] Filter results to match this string
     * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#videos}
     */
    async videos (params?: {
        filter?: string,
        exact?: BinaryBoolean,
    } & Pagination) {
        let query = 'videos';
        query += qs.stringify(params, '&');
        return await this.request<{video: Video[]}>(query);
    }

    /**
     * This returns a single video
     * @remarks MINIMUM_API_VERSION=380001
     * @param params.filter UID to find
     * @see {@link https://ampache.org/api/api-json-methods#video}
     */
    video (params: {
        filter: UID,
    }) {
        let query = 'video';
        query += qs.stringify(params, '&');
        return this.request<Video>(query);
    }

    /**
     * This returns video objects that have been deleted
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#deleted_videos}
     */
    async deletedVideos (params?: {

    } & Pagination) {
        let query = 'deleted_videos';
        query += qs.stringify(params, '&');
        return await this.request<{deleted_video: DeletedVideo[]}>(query);
    }
}