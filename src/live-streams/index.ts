import qs from 'querystringify';
import { LiveStream } from './types';
import { Base, BinaryBoolean, Pagination, UID } from '../base';

export class LiveStreams extends Base {
    /**
     * This returns live_streams based on the specified filter
     * @remarks MINIMUM_API_VERSION=5.1.0
     * @param [params.filter] Filter results to match this string
     * @param [params.exact] 0, 1 (if true filter is exact = rather than fuzzy LIKE)
     * @param [params.add] ISO 8601 Date Format (2020-09-16) Find objects with an 'add' date newer than the specified date
     * @param [params.update] ISO 8601 Date Format (2020-09-16) Find objects with an 'update' time newer than the specified date
     * @param [params.offset]
     * @param [params.limit]
     * @see {@link https://ampache.org/api/api-json-methods#live_streams}
     */
    async liveStreams (params?: {
        filter?: string,
        exact?: BinaryBoolean,
        add?: Date,
        update?: Date,
    } & Pagination) {
        let query = 'live_streams';
        query += qs.stringify(params, '&');
        let data = await this.request<{live_stream: LiveStream[]}>(query);
        return (data.live_stream) ? data.live_stream : data;
    }

    /**
     * This returns a single live_stream
     * @remarks MINIMUM_API_VERSION=5.1.0
     * @param params.filter UID to find
     * @see {@link https://ampache.org/api/api-json-methods#live_stream}
     */
    liveStream (params: {
        filter: UID,
    }) {
        let query = 'live_stream';
        query += qs.stringify(params, '&');
        return this.request<LiveStream>(query);
    }
}